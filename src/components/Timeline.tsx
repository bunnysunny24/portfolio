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

  // Content data for the timeline
  const data1: TimelineEntry[] = [
    {
      title: "DSA Club - Volunteering",
      content: <p>Participated in various coding events and mentorship programs, helping fellow students improve their coding skills.</p>,
    },
    {
      title: "Committee Member - Hospitality Domain",
      content: <p>Contributed to organizing events, ensuring guest satisfaction, and managing hospitality services during various college events.</p>,
    },
    {
      title: "Event Organizers",
      content: <p>Worked as part of the team organizing coding competitions and workshops, fostering a collaborative environment for all participants.</p>,
    },
  ];

  const data2: TimelineEntry[] = [
    {
      title: "Aarshuh Club - Volunteering",
      content: <p>Engaged in community service projects, helping to raise awareness and support for local charities.</p>,
    },
    {
      title: "Member - External Affairs",
      content: <p>Involved in outreach programs, building partnerships with other organizations to enhance club visibility and impact.</p>,
    },
  ];

  const data3: TimelineEntry[] = [
    {
      title: "IEEE Society - Web Development Team Member",
      content: <p>Collaborated with a team to develop and maintain the society's website, ensuring a user-friendly experience and up-to-date information.</p>,
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
    <div className="w-full bg-black font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Clubs and Leadership Timelines
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          Here's a timeline of my journey through various clubs and positions I've held.
        </p>
      </div>
      <div className="flex justify-around space-x-8">
        {/* Timeline 1: DSA Club */}
        <div className="w-1/3" ref={containerRef1}>
          <div ref={ref1} className="relative pb-20 pl-10">
            {data1.map((item, index) => (
              <div key={index} className="flex flex-col gap-10 pt-10">
                <div className="sticky flex flex-col items-center top-40 self-start">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-500">{item.title}</h3>
                </div>
                <div className="relative p-4 bg-white/20 rounded-lg backdrop-blur-lg shadow-lg mb-12">
                  {item.content}
                </div>
              </div>
            ))}
            {/* Timeline Line */}
            <div
              style={{
                height: height1 + "px",
              }}
              className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform1,
                  opacity: opacityTransform1,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Timeline 2: Aarshuh Club */}
        <div className="w-1/3" ref={containerRef2}>
          <div ref={ref2} className="relative pb-20 pl-10">
            {data2.map((item, index) => (
              <div key={index} className={`flex flex-col gap-10 pt-10 ${index === 0 ? "mt-32" : ""}`}>
                <div className="sticky flex flex-col items-center top-40 self-start">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-500">{item.title}</h3>
                </div>
                <div className="relative p-4 bg-white/20 rounded-lg backdrop-blur-lg shadow-lg mb-20">
                  {item.content}
                </div>
              </div>
            ))}
            {/* Timeline Line */}
            <div
              style={{
                height: height2 + "px",
              }}
              className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform2,
                  opacity: opacityTransform2,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Timeline 3: IEEE Society */}
        <div className="w-1/3" ref={containerRef3}>
          <div ref={ref3} className="relative pb-20 pl-10">
            {data3.map((item, index) => (
              <div key={index} className="flex flex-col gap-10 pt-10">
                <div className="sticky flex flex-col items-center top-40 self-start">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-500">{item.title}</h3>
                </div>
                <div className="relative p-4 bg-white/20 rounded-lg backdrop-blur-lg shadow-lg mb-12">
                  {item.content}
                </div>
              </div>
            ))}
            {/* Timeline Line */}
            <div
              style={{
                height: height3 + "px",
              }}
              className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform3,
                  opacity: opacityTransform3,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
