import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline: React.FC = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const [height1, setHeight1] = useState(0);
  const [height2, setHeight2] = useState(0);
  const [height3, setHeight3] = useState(0);

  // Updated data with 3 entries for each club
  const data1: TimelineEntry[] = [
    {
      title: "Coding Club",
      content: (
        <p>
          President at Coding Club. Organized hackathons and coding workshops.
        </p>
      ),
    },
    {
      title: "Hackathon Organizer",
      content: (
        <p>
          Led the annual university hackathon, which saw over 100 participants.
        </p>
      ),
    },
    {
      title: "Workshop Speaker",
      content: (
        <p>
          Delivered talks on full-stack development and JavaScript frameworks.
        </p>
      ),
    },
  ];

  const data2: TimelineEntry[] = [
    {
      title: "Robotics Club",
      content: (
        <p>
          Vice President at Robotics Club. Worked on projects involving AI and automation.
        </p>
      ),
    },
    {
      title: "AI Research Project",
      content: (
        <p>
          Led a project on AI-based object recognition using deep learning.
        </p>
      ),
    },
    {
      title: "Automation Workshop",
      content: (
        <p>
          Organized workshops on building automated systems with microcontrollers.
        </p>
      ),
    },
  ];

  const data3: TimelineEntry[] = [
    {
      title: "Design Club",
      content: (
        <p>
          Lead Designer at Design Club. Managed creative projects and UI/UX design sprints.
        </p>
      ),
    },
    {
      title: "UI/UX Design Sprint",
      content: (
        <p>
          Organized design sprints to improve the user experience of web apps.
        </p>
      ),
    },
    {
      title: "Creative Director",
      content: (
        <p>
          Oversaw a team of 10 designers for the annual club project.
        </p>
      ),
    },
  ];

  useEffect(() => {
    if (ref1.current) {
      const rect = ref1.current.getBoundingClientRect();
      setHeight1(rect.height);
    }
    if (ref2.current) {
      const rect = ref2.current.getBoundingClientRect();
      setHeight2(rect.height);
    }
    if (ref3.current) {
      const rect = ref3.current.getBoundingClientRect();
      setHeight3(rect.height);
    }
  }, [ref1, ref2, ref3]);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: containerRef1,
    offset: ["start 10%", "end 50%"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef2,
    offset: ["start 10%", "end 50%"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: containerRef3,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform1 = useTransform(scrollYProgress1, [0, 1], [0, height1]);
  const opacityTransform1 = useTransform(scrollYProgress1, [0, 0.1], [0, 1]);

  const heightTransform2 = useTransform(scrollYProgress2, [0, 1], [0, height2]);
  const opacityTransform2 = useTransform(scrollYProgress2, [0, 0.1], [0, 1]);

  const heightTransform3 = useTransform(scrollYProgress3, [0, 1], [0, height3]);
  const opacityTransform3 = useTransform(scrollYProgress3, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black max-w-4xl">
          Clubs and Leadership Timelines
        </h2>
        <p className="text-neutral-700 text-sm md:text-base max-w-sm">
          Here's a timeline of my journey through various clubs and positions
          I've held.
        </p>
      </div>

      <div className="flex justify-between space-x-8">
        {/* Timeline 1: Coding Club */}
        <div className="w-1/3" ref={containerRef1}>
          <div ref={ref1} className="relative pb-20">
            {data1.map((item, index) => (
              <div key={index} className="flex flex-col gap-10 pt-10">
                <div className="sticky flex flex-col items-center top-40 self-start">
                  <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-500">{item.title}</h3>
                </div>
                <div className="relative p-4 bg-white/20 rounded-lg backdrop-blur-lg shadow-lg">
                  {item.content}
                </div>
              </div>
            ))}

            {/* Timeline Line */}
            <div
              style={{
                height: height1 + "px",
              }}
              className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-black to-transparent"
            >
              <motion.div
                style={{
                  height: heightTransform1,
                  opacity: opacityTransform1,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-black to-transparent rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Timeline 2: Robotics Club */}
        <div className="w-1/3" ref={containerRef2}>
          <div ref={ref2} className="relative pb-20">
            {data2.map((item, index) => (
              <div key={index} className="flex flex-col gap-10 pt-10">
                <div className="sticky flex flex-col items-center top-40 self-start">
                  <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-500">{item.title}</h3>
                </div>
                <div className="relative p-4 bg-white/20 rounded-lg backdrop-blur-lg shadow-lg">
                  {item.content}
                </div>
              </div>
            ))}

            {/* Timeline Line */}
            <div
              style={{
                height: height2 + "px",
              }}
              className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-black to-transparent"
            >
              <motion.div
                style={{
                  height: heightTransform2,
                  opacity: opacityTransform2,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-black to-transparent rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Timeline 3: Design Club */}
        <div className="w-1/3" ref={containerRef3}>
          <div ref={ref3} className="relative pb-20">
            {data3.map((item, index) => (
              <div key={index} className="flex flex-col gap-10 pt-10">
                <div className="sticky flex flex-col items-center top-40 self-start">
                  <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-500">{item.title}</h3>
                </div>
                <div className="relative p-4 bg-white/20 rounded-lg backdrop-blur-lg shadow-lg">
                  {item.content}
                </div>
              </div>
            ))}

            {/* Timeline Line */}
            <div
              style={{
                height: height3 + "px",
              }}
              className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-black to-transparent"
            >
              <motion.div
                style={{
                  height: heightTransform3,
                  opacity: opacityTransform3,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-black to-transparent rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
