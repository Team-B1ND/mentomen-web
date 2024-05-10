import Image from "next/image";
import macbook from "@/public/icons/title/macbook.png";
import { useRouter } from "next/router";
import * as S from "./style";
import { CustomLink } from "@/src/stories/styles";
import { NAV_TAGS_ITEMS } from "./constant";
import { Title } from "@/src/stories/ui";
import { GoogleAnalyzer } from "@/src/stories/utils";

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;
  const pageView = new GoogleAnalyzer().pageView;

  return (
    <S.TagContainer>
      <Title
        titleIcon={macbook}
        titleText="태그별로 조회하기"
        subTitleText="태그로 멘토 요청 글을 확인해 보세요!"
      />

      <nav>
        {NAV_TAGS_ITEMS.map((item) => {
          const link = `/tag/${item.title}`;
          return (
            <CustomLink href={link} key={item.color} $customstyle={S.LinkStyle}>
              <S.TagItemWrap
                onClick={() => {
                  pageView(link);
                  router.push(link);
                }}
              >
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  style={S.TagImg}
                  alt="태그"
                />
                <S.TagName
                  $isSelectTag={item.title === tag}
                  $selectTag={tag as string}
                >
                  {item.title}
                </S.TagName>
              </S.TagItemWrap>
            </CustomLink>
          );
        })}
      </nav>
    </S.TagContainer>
  );
};

export default Tag;
