import HeroImg from "@/assets/images/hero.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer , Full-Stack Developer 
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Mohamed Aziz Grami , a  freshly graduated 
                Software Engineering student with hands-on experience in{" "}
                <span className="font-bold text-white">
                   full-stack development ,
                </span>
                <span className="font-bold text-white">
                  CRM integration ,
                </span>
                <span className="font-bold text-white">
                DevOps and software architecture design
                </span>
                , Skilled in building scalable web platforms.
              </p>
              <p className="text-white">
               
                My focus is on making web development faster, easier, and
                accessible to all developers.
                
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value.  Actively seeking an
 opportunity to apply my technical expertise and problem-solving skills
  in a dynamic software engineering
 role.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Grami Mohamed Aziz
                    </cite>
                   
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
