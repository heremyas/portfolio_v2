import Head from "next/head";
import React from "react";
import InternshipContainer from "../components/InternshipContainer";
import MyPic from "../components/MyPic";
import Navbar from "../components/Navbar";
import ScrollDown from "../components/ScrollDown";
import s from "../styles/Internship.module.css";

function certificates() {
  return (
    <div className={s.Internship}>
      <Head>
        <title>Internship | Jeremiah Valencia</title>
        <meta name="description" content="Internship Jeremiah Valencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentPage={5} />

      <div className={s.texts_container}>
        <div className={s.txt_container}>
          <h4>
            I finished my <span style={{ fontSize: "1.5em" }}>240 hours</span>{" "}
            Intership at{" "}
            <span style={{ color: "#00C2CB", fontSize: "1.9em" }}> ROC.PH</span>{" "}
            as an <br></br>
            <span style={{ color: "#00C2CB", fontSize: "1.5em" }}>
              Assistant Team Leader
            </span>{" "}
            of{" "}
            <span style={{ fontSize: "1.5em" }}>
              Network Security and Maintenance Engineering
            </span>{" "}
            team.
          </h4>
        </div>
        <MyPic />
        <ScrollDown />
      </div>
      <InternshipContainer
        title="Certificate Of Completion"
        description={`On the 13th day of May 2022, I completed my 240 hours of on-the-job Training. I really learned a lot specially in enhancing my soft skills.\n\n Working in a company is not all about being expert at technical stuffs. Sometimes, knowledge can only be executed properly and efficiently using the right attitude and mindset.`}
        imgSrc="/assets/images/internship/coc.jpg"
        bgColor="#001e29"
      />
      <InternshipContainer
        title="Certificate Of Achievement"
        description="Being an Assistant Team Leader taught me how difficult it is for a Leader to lead a team by himself/herself. I learned that as an assistant, you should be always on the side of the leader to help him/her."
        imgSrc="/assets/images/internship/coa.jpg"
        bgColor="#001017"
      />

      <InternshipContainer
        title="HRIS Full Stack Developer"
        description={`I voluntered to be part of the special project they are building even though I don't have any knowledge about Laravel, But I did some PHP in the past so I grabbed the opportunity to learn new technology.\n\nThis is my first time working in a collaboration with a team and I had so much fun and learned mostly in using version control system or git`}
        imgSrc="/assets/images/internship/hris.jpg"
        bgColor="#01102b"

      />
    </div>
  );
}

export default certificates;
