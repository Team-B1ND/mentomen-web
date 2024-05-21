import { useRouter } from "next/router";
import React, { Suspense } from "react";
import DetailComments from "./DetailComments";
import DetailImages from "./DetailImages";
import DetailMenteeInfo from "./DetailMenteeInfo";
import hello from "@/public/icons/title/hello.png";
import * as S from "./style";
import DetailSkeleton from "../Common/Skeleton/Detail";
import DetailCommentSkeleton from "../Common/Skeleton/Detail/DetailComment";
import { useGetPostByIdQuery } from "@/src/services/Post/post.query";
import profile from "@/public/icons/user/aprofile.png";
import { Column, ErrorBoundary, Row } from "@/src/stories/layout";
import {
  LikeInteraction,
  ShareInteraction,
  ShowMoreContent,
  Title,
} from "@/src/stories/ui";
import { css } from "styled-components";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Row $width={"100%"} $height={"100%"} $justifyContent={"center"}>
      <S.Wrapper>
        <Title
          titleIcon={hello}
          titleText="멘토 요청 글 상세보기"
          subTitleText="멘티가 올린 글을 자세하게 살펴보고 댓글을 달아 해결해 주세요!"
          customstyle={{ fontSize: "18px" }}
        />
        <ErrorBoundary fallback={<p>데이터를 불러오지 못했습니다.</p>}>
          <Suspense fallback={<DetailSkeleton />}>
            <DetailItem postId={Number(id)} />
          </Suspense>
        </ErrorBoundary>
      </S.Wrapper>
    </Row>
  );
};

const DetailItem = ({ postId }: { postId: number }) => {
  const { data: detailPost } = useGetPostByIdQuery(postId, { suspense: true });

  return (
    <Column
      $width={"100%"}
      $padding={"0 0 30px 0"}
      $alignItems={"center"}
      $rowGap={"15px"}
    >
      <S.PostArticle>
        <S.ProfileImage
          src={detailPost?.data.profileUrl || profile}
          width={45}
          height={45}
          alt="프로필"
        />

        <Column
          $padding={"0 0 0 18px"}
          $customStyle={css`
            width: calc(100% - 45px);
          `}
        >
          <DetailMenteeInfo {...detailPost?.data!} />

          <Column $rowGap={"4px"} $padding={"0 23px 0 0"} $width={"97%"}>
            <ShowMoreContent
              content={detailPost?.data.content!}
              customStyle={{ fontSize: "15px", lineHeight: "21px" }}
              maxHeight={86}
            />
            {detailPost?.data.imgUrls !== null && (
              <DetailImages imgUrls={detailPost?.data.imgUrls!} />
            )}
          </Column>

          <Row $width={"100%"} $padding={"8px 0 0 0"} $alignItems={"center"}>
            <LikeInteraction postId={postId} customStyle={S.InteractionStyle} />
            <ShareInteraction
              postId={postId}
              customStyle={S.InteractionStyle}
            />
          </Row>
        </Column>
      </S.PostArticle>

      <ErrorBoundary
        fallback={
          <Row
            $width={"100%"}
            $height={"300px"}
            $alignItems={"center"}
            $justifyContent={"center"}
            $customStyle={css`
              color: gray;
            `}
          >
            댓글을 불러오지 못했습니다.
          </Row>
        }
      >
        <Suspense fallback={<DetailCommentSkeleton />}>
          <DetailComments postId={postId} />
        </Suspense>
      </ErrorBoundary>
    </Column>
  );
};

export default Detail;
