import { MenToMenToast } from "@/src/util/Toast/menToMenToast";

export const useSharePost = () => {
  const handleSharePostClick = async (postId: number) => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_DOMAIN_URL}/detail/${postId}`
      );
      return MenToMenToast.showSuccess("클립보드에 링크가 저장되었습니다.");
    } catch (e) {
      return MenToMenToast.showError("클립보드에 저장하지 못했습니다.");
    }
  };
  return { handleSharePostClick };
};
