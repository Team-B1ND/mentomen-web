import { NAV_TAGS_ITEMS } from "@/constants/Tags/tags.constant";
import Image from "next/image";
import macbook from "@/public/icons/title/macbook.png";
import { useRouter } from "next/router";
import * as S from "./style";
import Title from "../../Title";

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <S.TagContainer>
      <Title
        titleIcon={macbook}
        titleText="태그별로 조회하기"
        subTitleText="태그로 멘토 요청 글을 확인해 보세요!"
      />

      <nav>
        {NAV_TAGS_ITEMS.map((item) => (
          <li
            key={item.color}
            onClick={() => router.push(`/tag/${item.title}`)}
          >
            <S.TagItemWrap>
              <div>
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  style={S.TagImg}
                  alt=""
                />
                <S.TagName
                  isSelectTag={item.title === tag}
                  selectTag={tag as string}
                >
                  {item.title}
                </S.TagName>
              </div>
            </S.TagItemWrap>
          </li>
        ))}
      </nav>
    </S.TagContainer>
  );
};

export default Tag;
