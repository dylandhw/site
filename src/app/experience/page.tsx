export default function About() {
  return (
    <main>
      <h1 className="text-3xl mb-6">Experience</h1>

      <div className="space-y-4 text-sm leading-6">
        <div className="mb-6">
          <h3 className="font-medium">
            <a
              className="text-blue-500"
              href="https://www.amd.com/en.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orion - Funded By AMD
            </a>{" "}
            - Program Manger, Lead Software Engineer
          </h3>{" "}
          <p className="text-gray-500 text-xs">October 2025 - Present</p>
          <p className="mt-1">
            I proposed the Orion Program, a curriculum support initiative
            sponsored by AMD, I designed and led a series of prerequisite
            lectures and hands-on labs to prepare students for advanced courses
            in hardware verification and digital logic design. I built the
            instructional pipeline from the ground up: developing teaching
            materials, creating practical exercises, and providing direct
            technical mentorship to help students build confidence with
            SystemVerilog, simulation workflows, and hardware-level thinking
            before entering upper-division coursework.
          </p>
          <p className="mt-1">
            In parallel, I serve as the Lead Software Engineer for our related
            research project developing a full verification suite targeting
            Xilinx FPGA boards. My work spans SystemVerilog for testbench
            development, Python for automation and tooling infrastructure, and
            C++ for performance-critical components. This project integrates
            real hardware workflows with modern verification practices, and my
            role focuses on architecting the software stack that enables
            scalable, reliable testing across multiple hardware platforms.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-medium">
            <a
              className="text-blue-500"
              href="https://area67.cs.ucf.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AREA67
            </a>{" "}
            - Software Engineering Research Intern
          </h3>{" "}
          <p className="text-gray-500 text-xs">October 2025 - Present</p>
          <p className="mt-1">
            Building a virtual profiler that visualizes Golang runtime tracing
            data, showing exactly how goroutines move across threads and CPU
            cores over time. It turns low-level scheduler events into an
            interactive timeline, making it easy to spot bottlenecks,
            contention, and performance issues in highly concurrent Go
            applications.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-medium">
            <a
              className="text-blue-500"
              href="https://draco.ucf.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              DRACO
            </a>{" "}
            - Software Engineering Research Intern
          </h3>{" "}
          <p className="text-gray-500 text-xs">March 2025 - Present</p>
          <p className="mt-1">
            Currently, I am developing partially homomorphic encryption
            algorithms in C++ for an encrypted processing unit. My work involves
            leaking bits of data, but masking and spreading them across locked
            threads in order to increase speed while maintaining privacy. As
            this research is still in development, I cannot say much more.
          </p>
          <p className="mt-1">
            I previously contributed to advancing next-generation satellite
            intelligence by prototyping computer vision algorithms in Python,
            MemTorch, and PyTorch for real-time flood detection, optimized to
            run on memristor-based systems for low-latency performance.
          </p>
          <p className="mt-1">
            These efforts not only accelerated the lab&apos;s workflow but also
            positioned our work for potential application in disaster-response
            systems, demonstrating the real-world impact of research conducted
            at DRACO.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-medium">
            <a
              className="text-blue-500"
              href="https://acm.ucf.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACM
            </a>{" "}
            - Vice President
          </h3>{" "}
          <p className="text-gray-500 text-xs">August 2024 - Present</p>
          <p className="mt-1">
            As Vice President of the Association for Computing Machinery at UCF,
            I led the organization&apos;s transition toward a research-focused
            model, raising the technical caliber of student projects and
            strengthening collaborations with university labs.
          </p>
          <p className="mt-1">
            I designed and delivered hands-on workshops in computer vision,
            distributed systems, and kernel development, creating original
            instructional materials and codebases that engaged and upskilled
            members in applied AI.
          </p>
          <p className="mt-1">
            I also expanded the chapter&apos;s industry presence by forging
            connections with professionals, securing guest speakers, and
            initiating a grant program to fund student-led research, ultimately
            positioning the chapter as a hub for both technical growth and
            professional development, maintaing funding of over $10,000. Under
            my leadership, membership engagement and event turnout significantly
            increased; witnessing a growth of 300+ members in four months.
          </p>
        </div>
      </div>
    </main>
  );
}
