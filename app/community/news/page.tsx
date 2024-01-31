import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { COMMUNITY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import Posts from "../posts";

export default function NewsPage() {
  return (
    <Container>
      <Posts folderPath="markdown/news/" type="news" />
    </Container>
  );
}
