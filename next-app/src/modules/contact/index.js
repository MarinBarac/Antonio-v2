import PageTitle from "@components/PageTitle";
import ContactForm from "./ContactForm";
import BookACallSection from "@components/BookACallSection";
import { getPage } from "@services/pages";
import { generateBookACallLink } from "shared/services";

const ContactPage = async () => {
  const pageInfo = await getPage("contact");
  return (
    <>
      <PageTitle title={pageInfo.title} description={pageInfo.description} />
      <ContactForm />
      <BookACallSection
        type="largeText"
        title={pageInfo.midsectionTitle}
        description={
          <p style={{ maxWidth: "576px", margin: "0 auto" }}>
            {pageInfo.midsectionSubtitle}
          </p>
        }
        secondLink={generateBookACallLink()}
        secondLinkText="Book videocall"
        secondLinkBlank={true}
        secondLinkType='green-underline'
        showAnimation
      />
    </>
  );
};

export default ContactPage;
