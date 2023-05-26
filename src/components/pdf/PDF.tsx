import {
    PDFViewer,
    PDFDownloadLink,
    Page,
    Text,
    View,
    Document,
} from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { PropsWithChildren } from "react";
import { JSX } from "react";

// The 'theme' object is your Tailwind theme config
const tw = createTw({
    theme: {
        fontFamily: ["Helvetica"],
    },
});

const numYears = new Date().getFullYear() - 2017;

export const PdfHeading = ({ heading }: { heading: string }) => (
    <Text style={tw("text-2xl font-extrabold underline")}>
        <Text>{heading}</Text>
    </Text>
);

export const BulletPoint = ({ children }: PropsWithChildren<{}>) => (
    <View style={tw("flex flex-row")}>
        <Text style={{ marginHorizontal: 8 }}>•</Text>
        {children}
    </View>
);

export const CompanySummary = ({
    companyName,
    duration,
    title,
    type,
}: {
    companyName: string;
    duration: string;
    title: string;
    type: "Perm" | "Contract";
}) => (
    <View style={tw("mb-2 bg-gray-200 p-1")}>
        <Text>
            <Text style={tw("")}>{companyName}</Text> [{type}]
        </Text>
        <Text>
            {title} ({duration})
        </Text>
    </View>
);

export const ProjectSummary = ({
    projectName,
    description,
    techStack,
}: {
    projectName: string;
    description: string[] | JSX.Element;
    techStack: string[];
}) => (
    <View style={tw("mb-4 leading-normal")}>
        <Text>
            <Text style={tw("underline")}>Project: </Text>
            {projectName}
        </Text>
        <View style={tw("mb-2")}>
            <Text>Tech stack: {techStack.join(", ")}</Text>
        </View>
        {Array.isArray(description)
            ? description.map((item) => (
                  <BulletPoint key={item}>
                      <Text>{item}</Text>)
                  </BulletPoint>
              ))
            : description}
    </View>
);

export const PdfLink = ({
    children,
    classNames,
}: PropsWithChildren<{ classNames: string[] }>) => (
    <Text
        style={tw(
            [
                "pr-2 underline text-gray-700 font-bold text-xs",
                ...classNames,
            ].join(" ")
        )}
    >
        {children}
    </Text>
);

export const HeaderPdf = ({ classNames = [] }: { classNames?: string[] }) => (
    <View style={tw(["mb-8", ...classNames].join(" "))}>
        <Text style={tw("text-6xl font-extrabold mb-4")}>Jithya N</Text>
        <Text style={tw("text-sm mb-4")}>
            Full-stack developer | Melbourne, Australia | jn.sub@outlook.com
        </Text>
        <View style={tw("flex flex-row")}>
            <PdfLink classNames={["pr-2"]}>
                https://github.com/jithyan [Github]
            </PdfLink>
            <PdfLink classNames={["pr-2"]}>
                https://www.linkedin.com/in/jithyan/ [LinkedIn]
            </PdfLink>
        </View>
    </View>
);

export const AboutPdf = ({ classNames = [] }: { classNames?: string[] }) => (
    <View style={tw("mb-8")}>
        <PdfHeading heading="About" />
        <Text style={tw("text-sm leading-relaxed")}>
            I've been a software developer for around {numYears} years, with the
            last {numYears - 1} of them working primarily on React SPAs in the
            financial services space at companies like NAB, IAG and ANZ. I'm
            interested in any coding heavy roles in both the backend and
            frontend, that require deep knowledge of React or Typescript. I'm
            also keen on any roles involving Rust, as I'm learning that in my
            spare time.
        </Text>
    </View>
);

export const EducationPdf = ({
    classNames = [],
}: {
    classNames?: string[];
}) => (
    <View style={tw("mb-2")}>
        <PdfHeading heading="Education" />

        <View
            style={tw(
                [
                    "text-sm leading-normal",
                    "flex",
                    "flex-row",
                    ...classNames,
                ].join(" ")
            )}
        >
            <View style={tw("pb-4 mr-2")}>
                <BulletPoint>
                    <Text style={tw("ml-1")}>
                        Master of Information Technology
                    </Text>
                </BulletPoint>
                <Text style={tw("ml-8")}>Monash University (2015-2017)</Text>
            </View>
            <View style={tw("pb-4")}>
                <BulletPoint>
                    <Text style={tw("ml-1")}>Bachelor of Software Systems</Text>
                </BulletPoint>
                <Text style={tw("ml-8")}>
                    University of Melbourne (2009-2013)
                </Text>
            </View>
        </View>
    </View>
);

export const TechnicalSkillsPdf = ({
    classNames = [],
}: {
    classNames?: string[];
}) => (
    <View style={tw(["text-sm mb-8 leading-relaxed", ...classNames].join(" "))}>
        <PdfHeading heading="Technical Skills" />

        <View style={tw("flex flex-row")}>
            <View style={tw("flex flex-col basis-1/3")}>
                <Text style={tw("")}>Highly experienced in:</Text>
                <BulletPoint>
                    <Text>React</Text>
                </BulletPoint>
                <BulletPoint>
                    <Text>Typescript</Text>
                </BulletPoint>
                <BulletPoint>
                    <Text>NodeJS</Text>
                </BulletPoint>
            </View>
            <View style={tw("flex flex-col basis-1/3")}>
                <Text style={tw("")}>Some experience with:</Text>
                <BulletPoint>
                    <Text>Java 8</Text>
                </BulletPoint>
                <BulletPoint>
                    <Text>Python</Text>
                </BulletPoint>
                <BulletPoint>
                    <Text>Docker</Text>
                </BulletPoint>
            </View>
            <View style={tw("flex flex-col basis-1/3")}>
                <Text style={tw("")}>Looking to upskill in:</Text>
                <BulletPoint>
                    <Text>CSS</Text>
                </BulletPoint>
                <BulletPoint>
                    <Text>Cloud</Text>
                </BulletPoint>
                <BulletPoint>
                    <Text>DevOps</Text>
                </BulletPoint>
            </View>
        </View>
    </View>
);

export const PdfPage = ({ children }: PropsWithChildren<{}>) => (
    <Page size="A4" style={tw("flex flex-col py-4 px-8")}>
        {children}
    </Page>
);

export const Pdf = () => (
    <Document
        title="Resume of Jithya N"
        author="Jithya N"
        subject="resume"
        language="English"
    >
        <PdfPage>
            <View style={tw("mb-2")}>
                <Text style={tw("text-xs text-center")}>
                    This resume was generated from:{" "}
                    <PdfLink classNames={["pr-2"]}>
                        https://jithyan.github.io/resume/
                    </PdfLink>{" "}
                    on {new Intl.DateTimeFormat("en-AU").format(new Date())}
                </Text>
            </View>
            <HeaderPdf />
            <EducationPdf classNames={[]} />
            <TechnicalSkillsPdf classNames={["mb-4"]} />
            <View style={tw("")}>
                <PdfHeading heading="Work Experience" />
                <View style={tw("text-sm mb-2")}>
                    <CompanySummary
                        companyName="National Australia Bank (NAB)"
                        duration="July 2022 - June 30, 2023"
                        title="Senior React Developer"
                        type="Contract"
                    />
                    <ProjectSummary
                        description={[
                            "Integrated Outbound Call Campaign management into NAB's customized Amazon Connect Softphone.",
                            "Migrated part of the codebase from Javascript to Typescript, and introduced React Testing Library to replace Enzyme for unit testing.",
                            "Introduced the finite state machine pattern for managing the complexity of call interactions. A key achievement was no defects being raised with regard to the Outbound feature in the Softphone since deployment to production.",
                        ]}
                        projectName="Outbound Dialler"
                        techStack={["React", "Typescript"]}
                    />
                </View>
                <View style={tw("text-sm")}>
                    <CompanySummary
                        companyName="Insurance Australia Group (IAG)"
                        duration="June 2021 - June 2022"
                        title="Specialist II, Developer"
                        type="Perm"
                    />
                    <ProjectSummary
                        projectName="Mid-term Amendments"
                        description={[
                            "Worked with Pivotal Labs to build a SPA that allowed customers to amend their home and motor insurance policies.",
                            "This was an XP team that worked strictly in pairs, using TDD, continuous integration and trunk based development practices.",
                        ]}
                        techStack={[
                            "React",
                            "Typescript",
                            "NodeJS",
                            "Redux",
                            "Express",
                        ]}
                    />
                    <ProjectSummary
                        projectName="Broker Removal Automation"
                        description={[
                            "A lot of production support time was spent on removing expired brokers from IAG's database. Developed a script that used ServiceNow APIs to extract broker IDs from raised tickets, purge them from our database, and then close the tickets.",
                            "Resulted in significant cost savings, as team members no longer needed to service those tickets.",
                        ]}
                        techStack={[
                            "Typescript",
                            "NodeJS",
                            "MongoDB",
                            "Docker",
                        ]}
                    />
                </View>
            </View>
        </PdfPage>
        <PdfPage>
            <View style={tw("text-sm mb-4")}>
                <ProjectSummary
                    projectName="Customer Complaints Form"
                    description={
                        <Text>
                            Maintained a form for staff to submit customer
                            complaints.
                        </Text>
                    }
                    techStack={[
                        "Typescript",
                        "React",
                        "React Hook Form",
                        "React Query",
                    ]}
                />
                <ProjectSummary
                    projectName="Nova Service Quotes"
                    description={
                        <Text>
                            Maintained a legacy NodeJS application for building
                            insurance quotes for the construction industry.
                        </Text>
                    }
                    techStack={["Javascript", "NodeJS"]}
                />
            </View>
            <View style={tw("text-sm mb-4")}>
                <CompanySummary
                    companyName="National Australia Bank (NAB)"
                    duration="Jan 2020 - May 2021"
                    title="Analyst, Engineer"
                    type="Perm"
                />
                <ProjectSummary
                    projectName="Business Transaction Accounts"
                    description={[
                        "Built several forms as micro-frontends that allowed customers to signup for NAB's Business Transaction Accounts.",
                        "Built and maintained a React Storybook component library, so that our team and others could share common form components",
                        "Won two consecutive quarterly NAB Recognize awards in my first year.",
                    ]}
                    techStack={[
                        "Typescript",
                        "React",
                        "NodeJS",
                        "Redux + Saga",
                        "Apollo GraphQL",
                    ]}
                />
                <ProjectSummary
                    projectName="Self Service Tool (SST)"
                    description={[
                        "SST was a tool to help internal NAB users to build their own forms.",
                        "Our team developed a SPA to search, edit and manage these user forms.",
                        "My contribution was to refactor the existing SST code base to take better advantage of Typescript, as well as added features and fixed defects.",
                    ]}
                    techStack={["Typescript", "React"]}
                />
            </View>

            <View style={tw("text-sm mb-4")}>
                <CompanySummary
                    companyName="CGI"
                    duration="Oct 2017 - Dec 2019"
                    title="Associate Developer"
                    type="Perm"
                />
                <ProjectSummary
                    projectName="ANZ Trade Platform"
                    description={[
                        "CGI is a global IT consultancy which delivers a broad range of services. This was a greenfield project for ANZ's Trade Platform.",
                        "Built a React SPA and a Java Spring Boot BFF.",
                    ]}
                    techStack={[
                        "Typescript",
                        "React",
                        "Redux + Saga",
                        "Java 8",
                        "Spring Boot",
                    ]}
                />
                <Text style={tw("bg-gray-400 text-center p-1")}>
                    For a complete list of projects I worked on at CGI, please
                    view my resume at{" "}
                    <PdfLink classNames={[]}>jithyan.github.io/resume/</PdfLink>
                </Text>
            </View>

            <View style={tw("text-sm mb-4")}>
                <PdfHeading heading="Personal Projects" />
                <View style={tw("flex flex-row")}>
                    <View style={tw("flex flex-col basis-1/2")}>
                        <View style={tw("mb-4 leading-normal px-2 mr-2")}>
                            <Text style={tw("underline")}>
                                Michael West Reader for Android
                            </Text>
                            <Text>
                                A mobile specific reader for the Michael West
                                news website.
                            </Text>
                            <PdfLink classNames={["mb-1"]}>
                                github.com/jithyan/michael-west-reader
                            </PdfLink>
                        </View>
                        <View style={tw("mb-4 leading-normal px-2 mr-2")}>
                            <Text style={tw("underline")}>
                                Crypto trading bots
                            </Text>
                            <Text>Bots for trading crypto on Binance.</Text>
                            <PdfLink classNames={["mb-1"]}>
                                http://ponzibots.com/
                            </PdfLink>
                            <PdfLink classNames={["mb-1"]}>
                                https://github.com/jithyan/crypto-bots
                            </PdfLink>
                        </View>
                    </View>
                    <View style={tw("flex flex-col basis-1/2")}>
                        <View style={tw("mb-4 leading-normal px-2 mr-2")}>
                            <Text style={tw("underline")}>
                                Git Branch Manager
                            </Text>
                            <Text>
                                A very simple CLI utility for being able to
                                select branches for checkout/removal, as I
                                couldn't be bothered typing out full branch
                                names.
                            </Text>
                            <PdfLink classNames={["mb-1"]}>
                                github.com/jithyan/git-branch-manager
                            </PdfLink>
                        </View>
                        <View style={tw("mb-4 leading-normal px-2 mr-2")}>
                            <Text style={tw("underline")}>
                                Software development blog
                            </Text>
                            <Text>
                                A place to document my learning on using React
                                and Typescript for web development.
                            </Text>
                            <PdfLink classNames={["mb-1"]}>
                                jithyan.github.io/blog/
                            </PdfLink>
                        </View>
                    </View>
                </View>
            </View>
        </PdfPage>
    </Document>
);

export const PdfView = () => (
    <PDFViewer width="100%" height="1080px">
        <Pdf />
    </PDFViewer>
);

export const DownloadResumeAsPdf = ({ className }: { className?: string }) => (
    <PDFDownloadLink
        className={
            "underline px-1 text-blue-600 font-bold inline-block text-sm visited:text-purple-600 hover:text-blue-400 hover:shadow-sm hover:outline-8 hover:outline-slate-800"
        }
        document={<Pdf />}
        fileName="jithya_dev_resume.pdf"
    >
        {({ loading }) =>
            loading ? "Loading document..." : "Download resume as PDF"
        }
    </PDFDownloadLink>
);
