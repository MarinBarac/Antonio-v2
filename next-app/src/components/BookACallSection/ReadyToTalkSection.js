import { generateBookACallLink } from "shared/services";
import BookACallSection from "./BookACallSection";

const ReadyToTalkSection = ({ secondLinkType }) => {
  return (
    <BookACallSection
      title={`Ready to talk about your project?`}
      description={
        <p style={{ maxWidth: "576px", margin: "0 auto" }}>
          Schedule a 30 minutes free call or send an email and get an ball-park
          estimate for your project.
        </p>
      }
      type="largeText"
      firstLink={generateBookACallLink()}
      firstLinkText='Book a call'
      secondLink='/contact'
      secondLinkText='Send an inquiry'
      secondLinkType={secondLinkType}
    />
  );
};

export default ReadyToTalkSection;
