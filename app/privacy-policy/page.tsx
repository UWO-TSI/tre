import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";

export default function PrivacyPolicy(){
    // TODO: UPDATE CONTACT US PAGE LINK

    interface ChildrenProps{
        children: React.ReactNode;
    }

    function ListItem({children}: ChildrenProps){
        // update list items to be more efficient? pass in a list of items?
        return <li className="my-[9px]">{children}</li>;
    }

    function Heading1({children}: ChildrenProps){
        return <h1 className="text-h1 text-main-darkpurple font-semibold mb-[16px] font text-[32px]">{children}</h1>;
    }

    function BodyText({children}: ChildrenProps){
        return <p className="my-[18px] text-body text-main-grey font-medium"> {children} </p>;
    }

    function Heading3({children}: ChildrenProps){
        return <h3 className="mt-[20px] mb-[10px] text-h3 font-semibold text-main-darkpurple">{children}</h3>;
    }
    
    return(
    <div className="bg-white">
        
        <Header></Header>
        <div className="place-self-center max-w-[1020px] mx-[130px] px-[32px] py-[96px] ">
            <Heading1>Childcan Privacy Policy</Heading1>
            <BodyText> 
                The terms and conditions outlined in the following Privacy Policy apply to users, 
                all people who have access to the Childcan website(s), and all users who have provided their 
            personal information. By using this site, you agree to the terms and conditions outlined below.</BodyText>
            <Heading3> Information we collect: </Heading3>
            <BodyText>
                Childcan (we) may collect the following information <strong><em>voluntarily</em></strong> provided by the user including:
            </BodyText>
            <ul className="my-[18px] pl-10 text-body text-main-grey font-medium list-disc">
                <ListItem> profile information 
                    <ul className=" list-circle pl-9"> 
                        {/* TODO: make this bullet an open circle */}
                        <ListItem>first name</ListItem>
                        <ListItem>last name</ListItem>
                        <ListItem>job title</ListItem>
                        <ListItem>industry</ListItem>
                        <ListItem>company name</ListItem>
                    </ul>
                </ListItem> 
                <ListItem> communication between the user and Childcan including:
                    <ul className="list-disc pl-9">
                        <ListItem>emails</ListItem>
                        <ListItem>direct messages</ListItem>
                    </ul>
                </ListItem>
               
            </ul>
            <Heading3>How we collect information:</Heading3>
            <BodyText>We only collect personal information that is shared <strong><em>voluntarily</em></strong> by the user through the following means: </BodyText>
            <ol className="text-body text-main-grey font-medium list-decimal pl-20">
                <ListItem>registering for our newsletter(s)</ListItem>
                <ListItem> filling out sign-up forms on social platforms and/or Childcan website(s), including:
                    <ul className="text-body text-main-grey font-medium list-disc pl-9">
                        <ListItem>LinkedIn lead generation and sponsored content advertisements</ListItem>
                        <ListItem>Facebook lead generation forms</ListItem>
                        <ListItem>Instagram lead generation forms</ListItem>
                        <ListItem> Childcan website contact form(s)</ListItem>
                    </ul>
                </ListItem> 
                <ListItem>registering for an event</ListItem>
                <ListItem>submitting comments through our contact form(s) or through email</ListItem>
                <ListItem>by direct contact:
                    <ul className="text-body text-main-grey font-medium list-disc pl-9">
                        <ListItem>providing business contact information</ListItem>
                        <ListItem>verbally requesting to be added to our database</ListItem>
                    </ul>
                </ListItem>
                <ListItem>donating online or to an event participant, unless opt out is selected</ListItem>
            </ol>
            <Heading3>How we use personal information:</Heading3>
            <BodyText><strong>By providing your personal information through the above means, you agree to receive communications from us.</strong> </BodyText>
            <BodyText>We may use your personal information to:</BodyText>
            <ul className="text-body text-main-grey font-medium list-disc pl-10">
                <ListItem>provide information related to our services</ListItem>
                <ListItem>provide general information</ListItem>
                <ListItem>respond to inquiries or concerns</ListItem>
                <ListItem>notify you about company updates, news, and events</ListItem>
                <ListItem>provide technical support</ListItem>
            </ul>
            <BodyText>Methods of communication include but are not limited to:</BodyText>
            <ul className="text-body text-main-grey font-medium list-disc pl-10">
                <ListItem>newsletters</ListItem>
                <ListItem>direct mail</ListItem>
                <ListItem>phone calls</ListItem>
                <ListItem>emails</ListItem>
                <ListItem>in person meetings</ListItem>
            </ul>
            <BodyText>User privacy is important to us, and we adhere to strict privacy protocols to ensure information is stored securely and safely. Any personal information collected by Childcan is kept strictly confidential and is not shared with any third parties. </BodyText>
            <BodyText>Users may request their personal information be removed from our database at any time by unsubscribing from our newsletters or by <a href="https://childcan.com/contact" target="_blank" rel="noreferrer" className="text-link-blue">contacting our office</a>. Users have a right to their personal information and may request updates or removal at any time.</BodyText>
            <Heading3>Usage and Analytics Data</Heading3>
            <BodyText>In order to provide our users with the best experience possible, we use Google Analytics, a third party service provided by Google, Inc. to automatically gather and store certain information about your visit to our website(s). This information is anonymous and used to provide general statistics about our website(s) for analysis. This information may include, but is not limited to:</BodyText>
            <ul className="my-[18px] text-body text-main-grey font-medium list-disc pl-6">
                <ListItem>IP address</ListItem>
                <ListItem>type of device and browser</ListItem>
                <ListItem>pageviews</ListItem>
            </ul>
            <BodyText>You can opt-out of having your site activity available to Google Analytics by installing the <a href="https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=en" target="_blank" rel="noreferrer" className="text-link-blue">Google Analytics opt-out browser add-on</a>. </BodyText>
            <BodyText>Additional information about Google’s privacy policy can be found by following this link: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-link-blue">https://policies.google.com/privacy</a>. More information regarding Google Analytics and Google Tag Manager policies can be found here: <a href="https://www.google.com/analytics/terms/us.html" className="text-link-blue">https://www.google.com/analytics/terms/us.html</a>.</BodyText>
            <Heading3>Dispute Resolution</Heading3>
            <BodyText>If you encounter any issues or questions regarding this privacy policy, please <a href="https://childcan.com/contact" target="_blank" rel="noreferrer" className="text-link-blue"> contact us </a> directly and we will attempt to resolve the issue. </BodyText>
            <Heading3>Future Changes to the Privacy Policy</Heading3>
            <BodyText>We reserve the right to make changes to the outlined privacy policy at any time. We recommend users familiarize themselves with the policy on a regular basis. </BodyText>
            <BodyText>Any changes to the privacy policy which affect the outlined policy protocols detailed above will be communicated directly with users in advance, and users will have the option to opt out of the new protocols by formally requesting removal of personal data from our database.</BodyText>
            <BodyText>By using this site, you signify your assent to our Privacy Policy.</BodyText>
            <BodyText>Thank you for your understanding. Should you have any questions, please feel free to reach out to our team at <a href="mailto:info@childcan.com" className="text-link-blue">info@childcan.com</a> and we’ll be happy to assist you.</BodyText>   
            
        </div>
        <Footer></Footer>
    </div>
    );
}

