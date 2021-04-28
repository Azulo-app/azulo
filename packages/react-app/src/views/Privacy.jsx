import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { mainStyles } from '../layout/PageStyles';
import Container from '@material-ui/core/Container';
import ScrollToTop from '../hooks/ScrollTo';

export default function Privacy() {
  const mainClasses = mainStyles();

  return (
      <div className={mainClasses.root}>
          <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" component="main" className={mainClasses.pageContent}>
            <Grid container justify="center">
              <Grid item md={8}>
                <Grid container md={12} alignItems="center">
                  <Grid item className={mainClasses.pageTitleHold}><div className={mainClasses.pageTitle}>Privacy</div></Grid>
                  <Grid item><div className={mainClasses.pageDesc}>Azulo privacy policy</div></Grid>
                </Grid>
                <div className={mainClasses.bodyContent}>
                  <p>Your privacy is very important to us. We want to make your experience on the Internet as enjoyable and rewarding as possible, and we want you to use the Internet’s vast array of information, tools, and opportunities with complete confidence.</p>
                  <p>We have created this Privacy Policy to demonstrate our firm commitment to privacy and security. This Privacy Policy describes how our company collects information from all end users of our Internet services (the “Services”)-those who access some of our Services but do not have accounts (“Visitors”) as well as those who may purchase Products and/or pay a monthly service fee to subscribe to the Service (“Members”)-what we do with the information we collect, and the choices Visitors and Members have concerning the collection and use of such information. We request that you read this Privacy Policy carefully.</p>
                  <h4>PERSONAL INFORMATION OUR COMPANY COLLECTS AND HOW IT IS USED</h4>
                  <p>Introduction. Our company collects information in different ways from Visitors and Members who access the various parts of our Services and the network of Web sites accessible through our Service.</p>
                  <h4>REGISTRATION</h4>
                  <p>Members may be asked to provide certain personal information when they sign up for our Products or Services including name, address, telephone number, billing information (such as a credit card number), and the type of personal computer being used to access the Services. The personal information collected from Members during the registration process is used to manage each Member’s account (such as for billing purposes). This information may only be shared with third parties, as stated herein, or in special circumstances.</p>
                  <p>We may generate non-identifying and aggregate profiles from personal information Members provide during registration (such as the total number, but not the names, of Members). As explained in more detail below, we may use this aggregated and non-identifying information to help improve our Services.</p>
                  <p>Our Company Partners and Sponsors: Some products and services may be offered to Visitors and Members in conjunction with an affiliate, independent contractor seller or non-affiliated partner. To provide Visitors and Members some of these products and services, the partner may need to collect and maintain personal information.</p>
                  <p>If you complete an order for someone else, such as an online gift order sent directly to a recipient, you may be asked to provide information about the recipient, such as the recipient’s name, address, and phone number. Our company has no control over the information that is provided when such an order is placed for the recipient. Please exercise care when doing so.</p>
                  <p>If you order services or products directly from our company, we use the personal information you provide to process that order. If at all it is required to share your information with outside parties that we do business with, we will first get your written permission to do so.</p>
                  <h4>ONLINE ADVERTISEMENTS</h4>
                  <p>Our company may display our online advertisements. In those cases we may share non identifying information about our Visitors and Members collected through the registration process as well as through online surveys and promotions with these advertisers. Such as number of Visitors or Members.</p>
                  <p>Additionally, in some instances, we use this information to deliver tailored advertisements or joint ventures. For instance, an advertiser or joint venture company tells us the audience they want to reach and provides us an advertisement tailored to the audience. Based upon the information we have collected, we may then display or send the advertisement to the intended audience. Our company does share personal information about its Visitors or Members with these advertisers or joint venture companies without your expressed interests in their services through their advertised offer.</p>
                  <h4>RESPONSES TO EMAIL INQUIRIES</h4>
                  <p>When Visitors or Members send email inquiries to our company, the return email address is used to answer the email inquiry we receive.</p>
                  <h4>VOLUNTARY CUSTOMER SURVEYS</h4>
                  <p>We may periodically conduct both business and individual customer surveys. We encourage our customers to participate in these surveys because they provide us with important information that helps us to improve the types of products and services we offer and how we provide them to you.</p>
                  <p>We may take the information we receive from individuals responding to our Customer Surveys and combine (or aggregate) it with the responses of other customers we may have, to create broader, generic responses to the survey questions (such as gender, age, residence, hobbies, education, employment, industry sector, or other demographic information). We then use the aggregated information to improve the quality of our services to you, and to develop new services and products. This aggregated, non-personally identifying information may be shared with third parties.</p>
                  <h4>PROMOTION</h4>
                  <p>Our company may offer polls, contests, sweepstakes, drawings, games, content, or other promotions that are sponsored by or cobranded with third parties. You may be entered in a sweepstakes, contest, or other promotion, simply by making a purchase from us or by providing us with personally identifiable information for some other reason or purpose. Due to these third party relationships, the third parties may obtain personally identifiable information that visitors voluntarily submit to our company. Our company has no control over third parties’ use of this information.</p>
                  <p>Additionally, personally identifiable information may be collected when you order products, enter contests, vote in polls or otherwise express an opinion, subscribe to one of our services such as our online newsletters, or participate in one of our online forums or communities. The types of personally identifiable information that may be collected at these pages include but may not be limited to: name, address, e-mail address, telephone number, fax number, credit card information, and information about your interests in and use of various products, programs, and services. Our sponsors or third parties may send you material that relates to our company’s services, products or activities.</p>
                  <h4>LINKS TO OTHER SITES</h4>
                  <p>Where this site contains links to other sites, we do not accept responsibility for the privacy practices or the content of such other sites.</p>
                  <p>We encourage other suitable websites to include a link back to this site provided you DO NOT use any trademarks or copyright information without permission and that you do not link to this site from a site or in a manner which disparages, our website and respective company or it's directors, employees, agents or suppliers.</p>
                  <h4>LIABILITY DISCLAIMER</h4>
                  <p>We will use all reasonable endeavours to protect and keep your personal information confidential. If any of your personal information is accessed by a third party, whether through our negligence or otherwise, to the extent permitted by law, we disclaim any and all liability to any person or organisation for loss, damage or costs.</p>
                  <h4>SECURITY:</h4>
                  <p>While we make every effort to keep your information private and away from hackers, it is not possible for us to guarantee your privacy. Please weigh up the risk that your details will be misused by hackers with the benefit of receiving the great services that this site has to offer.</p>
                  <h4>SPECIAL CASES</h4>
                  <p>It is not our company’s policy to use or share the personal information about Visitors or Members in ways described herein without additional notice or means to opt out or otherwise prohibit such unrelated uses.</p>
                  <p>Also, we may disclose personal information about Visitors or Members, or information regarding your use of the Services or Web sites accessible through our Services, for any reason if, in our sole discretion, we believe that it is reasonable to do so, including: credit agencies, collection agencies, merchant database agencies, law enforcement, or to satisfy laws, such as the Electronic Communications Privacy Act, the Child Online Privacy Act, regulations, or governmental or legal requests for such information; to disclose information that is necessary to identify, contact, or bring legal action against someone who may be violating our Acceptable Use Policy or Terms Of Service, or other user policies; to operate the Services properly; or to protect our company and our Members.</p>
                  <p>This privacy policy identifies the categories of personally identifiable information that our company collects through our Web site or online service, about individual consumers who use or visit our company’s commercial Web site or online service and the categories of third-party persons or entities with whom our company may share that personally identifiable information.</p>
                  <p>Our company does not maintain a process for an individual consumer who uses or visits our commercial Web site or online service to review and request changes to any of his or her personally identifiable information that is collected through our Web site or online service.</p>
                  <p>See the section below entitled “Revisions To This Policy” for a description of the process by which our company notifies consumers who use or visit our commercial Web site or online service of material changes to our company’s privacy policy for this Web site or online service.</p>
                  <h4>FOR THE PURPOSES OF THIS POLICY AND COMPLIANCE THE FOLLOWING DEFINITIONS APPLY</h4>
                  <p>Depending on the visitor’s activity, in our commercial Web site or online service, the following “personally identifiable information” may be collected, in addition to information set forth in other sections of this document.</p>
                  <p>The term “personally identifiable information” means individually identifiable information about an individual consumer collected online by our company from an individual and maintained<br />
                      by our company in an accessible form, and may include any of the following:</p>
                  <ol>
                      <li>A first and last name.</li>
                      <li>A home or other physical address, including street name and name of a city or town.</li>
                      <li>An e-mail address.</li>
                      <li>A telephone number.</li>
                      <li>A social security number.</li>
                      <li>Any other identifier that permits the physical or online contacting of a specific individual.</li>
                      <li>Information concerning a user that the Web site or online service collects online, from the user, and maintains in personally identifiable form, in combination with an identifier described within this privacy policy.</li>
                  </ol>
                  <p>“Cookies” and How Our Company Uses Them. A “cookie” is a small data file that can be placed on your hard drive when you visit certain Web sites. Our company may use cookies to collect, store, and sometimes track information for purposes stated herein as well as for statistical purposes to improve the products and services we provide and to manage our telecommunications networks.</p>
                  <p>Advertisers and partners may also use their own cookies. We do not control use of these cookies and expressly disclaim responsibility for information collected through them.</p>
                  <p>Our Company Commitment to Children’s Privacy. Protecting children’s privacy is especially important to us. It is our policy to comply with the Children’s Online Privacy Protection Act of 1998 and all other applicable laws.</p>
                  <h4>PUBLIC FORUMS</h4>
                  <p>Please remember that any information you may disclose in any Member Directory, or other public areas of our Web sites or the Internet, becomes public information. You should exercise caution when deciding to disclose personal information in these public areas.</p>
                  <p>Our Company’s Commitment to Data Security: Services and Web sites we sponsor have security measures in place to protect the loss, misuse, and alteration of the information under our control. While we make every effort to ensure the integrity and security of our network and systems, we cannot guarantee that our security measures will prevent third-party “hackers” from illegally obtaining this information.</p>
                  <p>Where to Direct Questions About Our Privacy Policy: If you have any questions about this Privacy Policy or the practices described herein, you may contact us through the contact information provided on this Web site.</p>
                  <h4>REVISIONS TO THIS POLICY</h4>
                  <p>Our company reserves the right to revise, amend, or modify this policy, our Terms Of Service agreement, and our other policies and agreements at any time and in any manner, by updating this posting. Your use of this site after such changes are implemented constitutes your acknowledgement and acceptance of these changes. Please consult this privacy statement prior to every use for any changes.</p>
                  <h4>DISCLAIMER</h4>
                  <p>We do try to get all the details right, but sometimes as with the nature of humans, we do get it wrong. Because of this we cannot provide any warranty, guarantee, or promise in any way about the accuracy of the content on the website.</p>
                  <h4>ACCURACY ON OTHER WEBSITES</h4>
                  <p>Sometimes we provide links to other websites, as we do not look after these websites we cannot control how accurate they are. If we do provide you with a link to another website, it doesn’t mean that we endorse that site.</p>
                  <h4>SOCIAL MEDIA TERMS</h4>
                  <p>We/Us/Our offers its social media pages as a service to provide you with information about us, our services, and other material of interest.</p>
                  <p>Our social media pages are those pages on social media websites including, but not limited to, Facebook, Twitter, Linkedin, Pinterest and Slideshare, that are identified as a web page associated with ours (Social Media Pages). To avoid any confusion between a third party Social Media Page and our own, a link to each Social Media Page that is associated with us can be found on our website. We do not associate ourselves with, or provide any warranties as to the quality, content or legality of Social Media Pages that are not linked to from our Website.</p>
                  <p>In accessing and using our Social Media Pages, you must also comply with any terms and/or conditions specific to those websites as well as with these Terms.</p>
                  <h4>CONTENT ON SOCIAL MEDIA PAGES</h4>
                  <p>Regardless of whether it was posted and/or uploaded by us or a third party, we:</p>
                  <ul>
                      <li>do not endorse any comments, advice, statements, visuals, audio, videos or other material (Content) posted to our Social Media Pages;</li>
                      <li>do not represent or warrant the accuracy of the Content posted to our Social Media Pages; and</li>
                      <li>will not be liable for any Content posted to our Social Media Pages.</li>
                  </ul>
                  <p>Whilst we may not monitor all Content that you post to our Social Media Pages, we expect that you will not post any Content that we may deem to:</p>
                  <ul>
                      <li>be defamatory, abusive or hateful, intimidating, or misleading;</li>
                      <li>constitute junk mail or bullying;</li>
                      <li>infringe a third parties rights; or</li>
                      <li>be in breach of any laws.</li>
                  </ul>
                  <p>In the event that you do post such material, we reserve the right to remove that material from our Social Media Pages immediately and without notice to you.</p>
                  <p>We will also remove, without notice to you, any unapproved Content that is commercial in nature. We are not responsible, nor will we take any responsibility for, any advertising material that may be displayed on our Social Media Pages by third parties, including Facebook.</p>
                  <div style={{'margin-top': '20px'}}>{ScrollToTop()}</div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      </div>
  );
}