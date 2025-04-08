import React from 'react';
import { ContentSection, HeroContent, HeroImage, HeroSection, HeroText, HeroTitle, PageContainer, Paragraph, SectionTitle, StatCard, StatLabel, StatNumber, StatsContainer, TeamContainer, TeamMember, TeamMemberBio, TeamMemberImage, TeamMemberName, TeamMemberRole } from './About.styles';


const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroImage />
        <HeroContent>
          <HeroTitle>ברוכים הבאים למנהטן קאר</HeroTitle>
          <HeroText>המומחים המובילים לרכבי יוקרה וספורט בישראל מזה למעלה מ-15 שנה</HeroText>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>הסיפור שלנו</SectionTitle>
        <Paragraph>
          מנהטן קאר נוסדה בשנת 2008 מתוך תשוקה אמיתית לרכבים ומחויבות ליצירת חווית רכישה יוצאת דופן. המייסדים שלנו, דויד כהן ומיכאל לוי, החלו את דרכם כאספני רכבים וחובבי רכב נלהבים, וחלמו ליצור חברה שמשלבת בין אהבתם לרכבים יוקרתיים לבין שירות לקוחות ברמה הגבוהה ביותר.
        </Paragraph>
        <Paragraph>
          מה שהתחיל כעסק קטן עם מספר רכבים בודדים, צמח להיות אחת מסוכנויות הרכב היוקרתיות המובילות בישראל. אנו מתמחים במכירה, ייבוא ושירות של מגוון רכבי יוקרה וספורט מהמותגים המובילים בעולם, כולל פורשה, פרארי, למבורגיני, מרצדס-בנץ, ב.מ.וו, אודי ועוד.
        </Paragraph>
      </ContentSection>

      <StatsContainer>
        <StatCard>
          <StatNumber>15+</StatNumber>
          <StatLabel>שנות ניסיון</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>5,000+</StatNumber>
          <StatLabel>לקוחות מרוצים</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>500+</StatNumber>
          <StatLabel>רכבים במלאי</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>98%</StatNumber>
          <StatLabel>שביעות רצון</StatLabel>
        </StatCard>
      </StatsContainer>

      <ContentSection>
        <SectionTitle>הערכים שלנו</SectionTitle>
        <Paragraph>
          במנהטן קאר, אנו מאמינים שרכישת רכב צריכה להיות חוויה מהנה ומספקת, ולא מלחיצה. לכן, השירות שלנו מבוסס על ערכים של שקיפות, אמינות ומקצועיות:
        </Paragraph>
        <Paragraph>
          <strong>שקיפות מלאה</strong> - אנו מציגים את כל המידע הרלוונטי לגבי הרכב, כולל היסטוריית טיפולים, בדיקות טכניות ואפשרויות מימון, ללא הפתעות.
        </Paragraph>
        <Paragraph>
          <strong>שירות אישי</strong> - אנו מתאימים לכל לקוח את הרכב המושלם עבורו, בהתאם לצרכים, העדפות ותקציב, עם ליווי אישי לאורך כל התהליך.
        </Paragraph>
        <Paragraph>
          <strong>מקצועיות ללא פשרות</strong> - הצוות שלנו מורכב ממומחי רכב עם ניסיון רב, המתמחים בכל מותג ודגם שאנו מציעים.
        </Paragraph>
      </ContentSection>

      <ContentSection>
        <SectionTitle>הצוות שלנו</SectionTitle>
        <Paragraph>
          הכירו את הצוות המסור שעומד מאחורי מנהטן קאר. המומחים שלנו אינם רק אנשי מכירות - הם חובבי רכב נלהבים עם ידע נרחב בתחום, המחויבים להעניק לכם את החוויה הטובה ביותר.
        </Paragraph>
        <TeamContainer>
          <TeamMember>
            <TeamMemberImage />
            <TeamMemberName>דויד כהן</TeamMemberName>
            <TeamMemberRole>מייסד ומנכ"ל</TeamMemberRole>
            <TeamMemberBio>
              עם למעלה מ-20 שנות ניסיון בתחום הרכב ואוסף פרטי של רכבי ספורט קלאסיים, דויד מביא תשוקה אמיתית וידע עצום לחברה.
            </TeamMemberBio>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage />
            <TeamMemberName>מיכאל לוי</TeamMemberName>
            <TeamMemberRole>מייסד ומנהל מכירות</TeamMemberRole>
            <TeamMemberBio>
              מומחה לרכבי יוקרה אירופאיים, מיכאל מוביל את צוות המכירות שלנו בעזרת הגישה השירותית והידע הטכני המעמיק שלו.
            </TeamMemberBio>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage />
            <TeamMemberName>רונית אברהם</TeamMemberName>
            <TeamMemberRole>מנהלת שירות לקוחות</TeamMemberRole>
            <TeamMemberBio>
              עם 15 שנות ניסיון בתחום השירות, רונית אחראית על חווית הלקוח המושלמת ומוודאת שכל לקוח מקבל את הטיפול האישי שהוא ראוי לו.
            </TeamMemberBio>
          </TeamMember>
        </TeamContainer>
      </ContentSection>

      <ContentSection>
        <SectionTitle>המתחם שלנו</SectionTitle>
        <Paragraph>
          אולם התצוגה שלנו במרכז תל אביב משתרע על פני 2,000 מ"ר ומציג מגוון רחב של רכבי יוקרה וספורט במצב מושלם. המתחם כולל גם מחלקת שירות מתקדמת, אזור המתנה מפנק עם טעימות באריסטה, וצוות מקצועי שישמח לענות על כל שאלה.
        </Paragraph>
        <Paragraph>
          אנו מזמינים אתכם לבקר אותנו ולחוות את ההבדל של מנהטן קאר. בין אם אתם מחפשים את רכב החלומות שלכם, שדרוג לרכב הנוכחי, או פשוט רוצים להתרשם מהמכוניות המרהיבות שלנו - הדלתות שלנו תמיד פתוחות.
        </Paragraph>
      </ContentSection>
    </PageContainer>
  );
};

export default AboutPage;