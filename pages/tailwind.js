import React from "react";

import BackToHomepage from "../components/resume/BackToHomepage";
import Header from "../components/resume/Header";

function ResumePage() {
  return (
    <main className="container mx-auto p-8 mt-8 mb-32 text-lg">
      <div className="grid gap-32">
        <Header headings={{ description: false }} phone={false} />

        <section className="text-left lg:mr-64">
          <h4 className="text-3xl">Hey,</h4>

          <p className="mt-5">
            I think I would be a great fit for the Tailwind UI team 🙂
            <br />
            I am a very well-rounded full-stack developer.
            <br />
            Mainly worked with Rails and React.
            <br />
            And looking for something where I can be close to Product.
          </p>
        </section>

        <section className="text-right lg:ml-64">
          <h4 className="text-3xl">How I got here</h4>

          <p className="mt-5">
            I've known about Tailwind for a long time
            <br />
            (since the very beginning I imagine 🤔)
            <br />
            because am a long-time listener of Full Stack Radio.
            <br />
            <span className="small text-muted">Yeah, a bit of a fan 😅.</span>
          </p>

          <p className="mt-5">
            Unfortunately I didn't have the opportunity to use it any project.
            <br />
            Until just recently.
          </p>

          <p className="mt-5">
            Just a few weeks ago I've started remaking my personal page,
            <br />
            and it was the perfect opportunity to have
            <br />a try at some different stuff.
          </p>

          <p className="mt-5">Next.js, and obviously, Tailwind.</p>

          <p className="mt-5">
            And what a pleasant surprise,
            <br />
            not only it was a great experience,
            <br />
            you are also hiring.
          </p>
        </section>

        <section className="text-left lg:mr-64">
          <h4 className="text-3xl">Why I am a fit</h4>

          <p className="mt-5">
            I have experienced lots of stuff (some pretty scary)
            <br />
            working with front-end and back-end.
            <br />
            I love working close to designers, UX, UI, and Product.
            <br />
            I am really into Tailwind's approach to CSS and componentization.
            <br />
            I also have experience helping and teaching other devs,
            <br />
            and working directly with customers.
          </p>
        </section>

        <section className="text-right lg:ml-64">
          <h4 className="text-3xl">What I am excited about</h4>

          <p className="mt-5">
            Interesting question, I've applied to Basecamp a couple months ago and they brought up a similar topic.
            <br />
            On that occasion I've written about Tailwind.
            <br />
            But I think it wouldn't be very suitable here 😅.
          </p>

          <p className="mt-5">
            So, Next.js is another thing that has me excited.
            <br />
            Mainly two things: <i>Static pages</i>, and <i>Opinionated JS/React</i>.
          </p>

          <p className="mt-5">
            As web developer, it is hard to get a better feeling than
            <br />
            making a dead simple page that accomplishes your objectives.
            <br />
            And there is a lot of space for for static pages,
            <br />
            on the marketing space, documentantions, blogs...
            <br />
            Coupling this with React for easy progressive enhancement
            <br />
            is a great point towards Next.js.
          </p>

          <p className="mt-5">
            Having worked with Rails for a long time,
            <br />
            <span className="small text-muted">Maybe I've got spoiled 😅</span>
            <br />
            not having all-encompassing opinionated stuff
            <br />
            and little convention-over-configuration
            <br />
            are my greatest pain points with JS projects right now.
            <br />
            I think Next.js is headed in a nice direction,
            <br />
            to be simple, full-featured and not feel scary big.
          </p>
        </section>

        <section className="text-left lg:mr-64">
          <h4 className="text-3xl">What I am looking for</h4>

          <p className="mt-5">
            A flexible culture, committed to delivering real value.
            <br />
            Open to all voices, and open to fast iteration of ideas.
            <br />
            Where I can be close to Product, to help, but mostly learn.
            <br />
            Great devs to share the day-to-day.
          </p>
        </section>

        <section className="text-right lg:ml-64">
          <h4 className="text-3xl">More about me</h4>

          <p className="mt-5">
            You can find more stuff about on me on my personal page.
            <br />
            Professional experience, projects, full resume, etc.
          </p>

          <p className="mt-5">
            <BackToHomepage />
          </p>
        </section>

        <section className="text-left lg:mr-64">
          <p className="">
            Hope to hear back from you 😉
            <br />
            <span className="text-muted">Evandro Sasse</span>
            <br />
          </p>
        </section>
      </div>
    </main>
  );
}

export default ResumePage;
