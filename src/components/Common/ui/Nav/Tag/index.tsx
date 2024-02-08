import Image from "next/image";
import macbook from "@/public/icons/title/macbook.png";
import { useRouter } from "next/router";
import * as S from "./style";
import Title from "../../Title";
import { CustomLink } from "@/src/styles/common.style";
import { NAV_TAGS_ITEMS } from "./constant";
import GoogleAnalyzer from "@/src/utils/Analyze/GoogleAnalyzer";

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;
  const pageView = GoogleAnalyzer.pageView;

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
            <CustomLink href={link} key={item.color} customstyle={S.LinkStyle}>
              <S.TagItemWrap onClick={() => pageView(link)}>
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  style={S.TagImg}
                  alt="태그"
                />
                <S.TagName
                  isSelectTag={item.title === tag}
                  selectTag={tag as string}
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
