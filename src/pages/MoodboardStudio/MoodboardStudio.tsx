import UploadZone from "../../components/moodboard/UploadZone";
import MoodboardGrid from "../../components/moodboard/MoodboardGrid";
import BoardTabs from "../../components/moodboard/BoardTabs";
import ImageModal from "../../components/moodboard/ImageModal";
import PinterestSearch from "../../components/moodboard/PinterestSearch";
import CollectionTabs from "../../components/moodboard/CollectionTabs";
import AIMoodboardCard from "../../components/moodboard/AIMoodboardCard";

export default function MoodboardStudio() {
  return (
    <div
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Moodboard Studio
      </h1>

      <BoardTabs />

      <CollectionTabs />

      <PinterestSearch />

      <UploadZone />

      <MoodboardGrid />

      <AIMoodboardCard />

      <ImageModal />
    </div>
  );
}