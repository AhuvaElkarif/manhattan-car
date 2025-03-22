import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterContent,
  LogoSection,
  LogoImage,
  FooterColumnsContainer,
  FooterColumn,
  ColumnTitle,
  ColumnList,
  ColumnListItem,
  SocialLinksContainer,
  SocialLink,
  FooterDisclaimer,
  FooterBottom,
  CopyrightText,
  CreditsText,
} from "./Footer.styles";
import { socialLinks, footerColumns } from "./data";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <LogoImage src="/path-to-logo.png" alt="SEA & CAR" />
          <p>
            SEA & CAR היא סוכנות רכבי יוקרה המתמחה ביבוא אישי, קנייה, מכירה,
            ייעוץ ותיווך של רכבי יוקרה. הסוכנות קיימת למעלה מ- 10 שנים.
          </p>
          <SocialLinksContainer>
            {socialLinks.map((link) => (
              <SocialLink
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {React.createElement(link.icon as React.ComponentType)}
              </SocialLink>
            ))}
          </SocialLinksContainer>
        </LogoSection>

        <FooterColumnsContainer>
          {footerColumns.map((column) => (
            <FooterColumn key={column.id}>
              <ColumnTitle>{column.title}</ColumnTitle>
              <ColumnList>
                {column.items.map((item, index) => (
                  <ColumnListItem key={index}>
                    {/* {item.url ? (
                      <Link to={item.url}>{item.text}</Link>
                    ) : ( */}
                    <span>{item.text}</span>
                    {/* )} */}
                  </ColumnListItem>
                ))}
              </ColumnList>
            </FooterColumn>
          ))}
        </FooterColumnsContainer>
      </FooterContent>

      <FooterDisclaimer>
        <p>
          אנחנו רואים בלקוחות עם מוגבלות, לקוחות שווי זכויות. אנו פועלים עפ"י
          המוגדר בחקיקת הנגישות ואף מעבר לנדרש. עפ"י חקיקה זו נכסינו מונגשים
          בהדרגה כמוגדר בתקנות הנגישות. נגישים בתחום נגישות השירות מבצעים בלוח
          זמנים המוגדר בתקנות נגישות לשירות. חלק זה באתר מסדיר ליידע אותך כיצד
          ניתן להנות מהסדרי הנגישות שלנו. מסרנו לאפשר לכל לקוח עם אי אלו מוגבלות
          שירות שיווני ונגיש. בדף זה יש לך שאלות, הצעות שיפור, נשמח לקבל פניותך.
          מספרדים בתל אביב, כך שניתן נגיש ברחוב קרבת בית העסק ויש נגישה לכסא
          גלגלים. בחנות עצמה אין נגישה לכסא גלגלים (יש שתי מדרגות), יש נגיש
          לכניס ולכסא גלגלים בפרטי לראות את הרכבים בחניון הרכבים שלנו.
        </p>
      </FooterDisclaimer>

      <FooterBottom>
        <CopyrightText>© 2025 sea-car. All rights reserved.</CopyrightText>
        <CreditsText>Design & Developed by Ahuva Elkarif</CreditsText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
