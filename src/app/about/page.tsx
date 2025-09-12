export default function About() {
    return (
      <main>
        <h1 className="text-3xl mb-6">About</h1>
        
        <div className="space-y-4 text-sm leading-6">
          <p>
            I&apos;m a student and software engineer at the University of Central Florida, 
            majoring in Computer Science and minoring in Statistics. My completed and current
            coursework includes: <a className="text-gray-500" href="https://catalog.ucf.edu/courses/computer-science/computer-science-bs/" target="_blank" rel="noopener noreferrer">
            <br></br>- Data Structures, Algorithms, Computer Logic & Architecture
            <br></br>- Systems Software, Security in Computing, Algo. for Machine Learning
            <br></br>- Computer Graphics, Mobile Software Development
            <br></br>- Discrete Structures, Advanced Statistics, and Advanced Calculus.</a>
          </p>
          <p>
          My passions lie in machine learning, computer vision, distributed systems architecture, and space systems software [in no particular order].
          </p>          
          <p>
            Outside of technology, I enjoy film, digging myself down wikipedia rabbit holes, and puzzles :D.
          </p>
          
          <h2 className="text-xl mt-8 mb-4">Experience</h2>
          <div className="mb-6">
          <h3 className="font-medium">
  <a className="text-blue-500" href="https://draco.ucf.edu" target="_blank" rel="noopener noreferrer">DRACO</a> - Software Engineering Research Intern
</h3>            <p className="text-gray-500 text-xs">March 2025 - Present</p>
            <p className="mt-1">
              At the DRACO Lab, I contributed to advancing next-generation satellite intelligence by prototyping computer vision algorithms in Python for real-time flood detection, optimized to run on memristor-based systems for low-latency performance. I engineered and evaluated image-processing pipelines under diverse environmental conditions, producing benchmarks that informed the design of onboard AI for satellite deployment.
            </p>
            <p className="mt-1">
            </p>
            <p className="mt-1">
              Beyond technical development, I synthesized cutting-edge research on novel computing hardware, shaping the conceptual framework for integrating emerging technologies into resilient, real-world space systems.
            </p>
            <p className="mt-1">
            </p>
            <p className="mt-1">
              In addition to my research contributions, I collaborated closely with a multidisciplinary team of engineers and scientists, helping bridge the gap between theoretical design and applied experimentation. I took initiative in presenting progress updates, drafting technical documentation, and proposing improvements to experimental methodology.
            </p>
            <p className="mt-1">
            </p>
            <p className="mt-1">
              These efforts not only accelerated the lab&apos;s workflow but also positioned our work for potential application in disaster-response systems, demonstrating the real-world impact of research conducted at DRACO.
            </p>
          </div>


          <div className="mb-6">
          <h3 className="font-medium">
  <a className="text-blue-500" href="https://acm.ucf.edu" target="_blank" rel="noopener noreferrer">ACM Student Chapter</a> - Vice President
</h3>            <p className="text-gray-500 text-xs">August 2024 - Present</p>
            <p className="mt-1">
              As Vice President of the Association for Computing Machinery at UCF, I led the organization&apos;s transition toward a research-focused model, raising the technical caliber of student projects and strengthening collaborations with university labs. I designed and delivered hands-on workshops in computer vision, creating original instructional materials and codebases that engaged and upskilled members in applied AI.
            </p>
            <p className="mt-1">
            </p>
            <p className="mt-1">
              I also expanded the chapter&apos;s industry presence by forging connections with professionals, securing guest speakers, and initiating a grant program to fund student-led research, ultimately positioning the chapter as a hub for both technical growth and professional development.
            </p>
            <p className="mt-1">
            </p>
            <p className="mt-1">
              Beyond internal initiatives, I focused on cultivating a strong community culture within ACM, encouraging mentorship between senior and junior members and organizing cross-discipline events that connected computer science students with peers in engineering, mathematics, and business.
            </p>
            <p className="mt-1">
            </p>
            <p className="mt-1">
              Under my leadership, membership engagement and event turnout significantly increased, and the chapter gained recognition within the university for its balance of technical rigor, professional opportunities, and inclusive collaboration.
            </p>
          </div>
        </div>
      </main>
    )
  }