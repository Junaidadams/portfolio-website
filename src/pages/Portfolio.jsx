import { easeInOut, motion } from "framer-motion";
import { ProjectTile } from "../../components/ProjectTile";
import { TechTiles } from "../../components/TechTiles";
import { ContactTiles } from "../../components/ContactTiles";
import { Testimonial } from "../../components/Testimonial";
import { SongTile } from "../../components/SongTile";
import { SubstackFeed } from "../../components/SubstackFeed";

import useAnalytics from "../hooks/useAnalytics";

import FlipLink from "../../components/FlipLink";
import { Redo } from "lucide-react";

export default function Portfolio() {
  useAnalytics("/portfolio");
  return (
    <main className="min-h-screen w-full z-0 overflow-hidden flex flex-col bg-[#f5f5f5f5] -translate-y-[64px]">
      <section
        id="welcome"
        className="grid h-screen place-content-center gap-2 px-8 bg-gradient-to-r from-cyan-700 to-cyan-800"
      >
        <div className="flex flex-row">
          <p
            style={{ transform: "rotate(-5deg)" }}
            className="text-white pr-2 font-dancing text-3xl tracking-wider"
          >
            (Hover)
          </p>
          <Redo
            className="mt-auto animate-pulse"
            color="white"
            size={29}
            strokeWidth={3}
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
        <FlipLink subText="my">Junaid&apos;s</FlipLink>
        <FlipLink subText="Design">full-stack</FlipLink>
        <div className="">
          <FlipLink subText="showcase.">Portfolio.</FlipLink>
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen bg-[#f5f5f5f5] mb-20 flex flex-col w-full xl:w-10/12 mx-auto xl:flex-row pb-12"
      >
        <div className="lg:w-1/2 xl:w-3/5 w-3/4 h-full p-8 xl:p-3  m-auto justify-center">
          <motion.img
            transition={easeInOut}
            whileHover={{ scale: 1.01 }}
            alt="Portrait Image"
            src="./portraitmain.png"
            className="rounded-full sm:w-3/4 lg:w-2/3 mx-auto shadow-4xl hover:shadow-3xl"
          />
        </div>
        <div className="m-auto w-3/4 xl:w-1/2 px-4 xl:px-2 py-12 justify-center lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            }}
          >
            <p className="sm:text-[18px] text-[14px] font-poppins uppercase tracking-wider">
              Introduction
            </p>
            <h1 className="lg:text-7xl text-5xl mb-4 text-[#26292b] font-black font-poppins border-b-[1px] border-[#1721298b] pb-4">
              About Me.
            </h1>
            <p className="lg:text-2xl font-e font-poppins text-2xl text-[#444]">
              Hi, I&apos;m Junaid, an experienced web developer proficient in
              Python, JavaScript, CSS, HTML, and frameworks like Node.js,
              ExpressJS, Django, ReactJS, and Tailwind CSS. I&apos;m well-versed
              in SQL for database management. With a passion for creating
              user-friendly digital experiences, I&apos;m open, approachable,
              and always eager to learn. I believe in effective communication,
              collaboration, and turning your ideas into elegant web solutions.
              I have completed the Full Stack Web Developer course through the{" "}
              <a
                href="https://www.schoolofit.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold"
              >
                School of IT
              </a>
              . You can view my certificate{" "}
              <a
                href="/favourites/certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold"
              >
                here
              </a>
              . The following cards represent my current projects, reflecting
              both my ongoing work and continuous learning efforts. Let&apos;s
              connect, explore my portfolio, and discuss how I can help bring
              your vision to life.
            </p>
          </motion.div>
        </div>
      </section>
      <section
        id="projects"
        className="min-h-screen bg-[#f5f5f5f5] mb-40 md:mb-20 flex flex-col w-full 2xl:w-10/12 mx-auto 2xl:flex-row pb-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="m-auto w-3/4 2xl:w-1/2 px-4 py-12 justify-center  lg:px-10"
        >
          <p className="sm:text-[18px] text-[14px] font-poppins uppercase tracking-wider">
            What I have done so far
          </p>
          <h1 className="lg:text-7xl text-5xl mb-4 text-[#26292b] font-black font-poppins border-b-[1px] border-[#1721298b] pb-4">
            My Projects.{" "}
          </h1>
          <p className="lg:text-2xl font-e font-poppins text-2xl text-[#444]">
            Here are some of the projects that I have created in my time as a
            web developer. I have learned to use many frameworks and toolsets to
            achieve different goals and constantly expanding my understanding.
          </p>
        </motion.div>{" "}
        <div className="2xl:w-2/5 w-full lg:h-screen mx-auto justify-center flex flex-col">
          <ProjectTile />
        </div>
      </section>
      <section
        id="technologies"
        className="min-h-screen bg-[#f5f5f5f5] mb-20 bg-laptop-image bg-cover bg-right md:bg-center md:bg-contain flex flex-col lg:flex-row"
      >
        {" "}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="m-auto w-3/4 lg:w-2/3 px-4 py-12 justify-center lg:px-10 backdrop-blur-2xl border-[1px] border-black rounded-xl bg-[#ffffff2d]"
        >
          <div className="w-fit mx-auto">
            <p className="sm:text-[18px] text-[14px] font-poppins uppercase tracking-wider">
              Technologies
            </p>
            <h1 className="lg:text-7xl text-5xl mb-4 text-[#26292b] font-black font-poppins border-b-[1px] border-[#1721298b] pb-4">
              What I Use.
            </h1>
            <p className="lg:text-2xl font-e font-poppins text-2xl text-[#444]">
              Below is an everchanging list of technologies that I am proficient
              in.
            </p>
          </div>
          <div className="my-4 mx-auto flex flex-col">
            <TechTiles />
          </div>
        </motion.div>{" "}
      </section>

      <section
        id="more"
        className="min-h-screen bg-[#f5f5f5f5] mb-40 md:mb-20 flex flex-col w-full lg:w-10/12 mx-auto lg:flex-row pb-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="m-auto w-4/5 lg:w-1/2 px-4 flex-row py-12 justify-center lg:px-10"
        >
          <div className="">
            <p className="sm:text-[18px] text-[14px] font-poppins uppercase tracking-wider">
              Some extras
            </p>
            <h1 className="lg:text-7xl text-5xl mb-4 text-[#26292b] font-black font-poppins border-b-[1px] border-[#1721298b] pb-4">
              More
            </h1>
            <p className="lg:text-2xl font-e font-poppins text-2xl text-[#444]">
              Here are some extras including some of my favourite things as well
              as some testimonials to get a more personal look into who I am and
              also how others perceive me.
            </p>
          </div>

          <div className="pt-4 ">
            <h2 className="text-4xl my-10 font-poppins text-[#26292b] font-black">
              Testimonials
            </h2>
            <Testimonial />
          </div>
        </motion.div>
        <div className="lg:w-2/5 w-3/4 lg:min-h-screen m-auto py-12 justify-center">
          {" "}
          <h2 className="text-4xl font-poppins my-10 text-[#26292b] font-black">
            Music
          </h2>
          <p className="lg:text-2xl mb-8 font-poppins text-2xl text-[#444]">
            I am a huge fan of music. Have a listen to some royalty free songs
            while you browse the webpage. All songs are from{" "}
            <span>
              <a href="https://pixabay.com/music/" className="text-[#0000eece]">
                Pixaby.
              </a>
            </span>
          </p>
          <SongTile />
          <h2 className="text-4xl font-poppins my-10 text-[#26292b] font-black">
            My Newsletter &quot;npm run dev&quot;
          </h2>
          <p className="lg:text-2xl mb-8 font-poppins text-2xl text-[#444]">
            I have a free weekly newsletter on{" "}
            <a href="https://substack.com/home" className="text-orange-600">
              Substack
            </a>{" "}
            about my day to day worklife and current projects. Here is my most
            recent post!
          </p>
          <SubstackFeed />
        </div>
      </section>
      <section
        id="contact"
        className="min-h-screen bg-[#f5f5f5f5] bg-contact-bg mb-20 w-full 2xl:w-10/12 mx-auto flex flex-col"
      >
        {" "}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="mx-auto mb-20 justify-center w-3/4 px-4 py-20 lg:w-2/3 lg:px-10 rounded-xl"
        >
          <p className="sm:text-[18px] text-[14px] font-poppins uppercase tracking-wider">
            Get in touch
          </p>
          <h1 className="lg:text-7xl text-5xl text-[#26292b] mb-4 font-black font-poppins border-b-[1px] border-[#1721298b] pb-4">
            Contact Me.
          </h1>
          <p className="lg:text-2xl font-e font-poppins text-2xl text-[#444]">
            If you have any questions or would like to know something that
            wasn&apos;t included on this page, please don&apos;t hesitate. I am
            accepting projects at the moment, if you would like to have me
            develop a website for you, reach out and we can discuss.
          </p>
        </motion.div>{" "}
        <div className="w-full mx-auto">
          <ContactTiles />
        </div>
      </section>
    </main>
  );
}
