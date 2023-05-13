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

// The 'theme' object is your Tailwind theme config
const tw = createTw({
    theme: {
        fontFamily: ["Helvetica"],
    },
});

const numYears = new Date().getFullYear() - 2017;

export const BulletPoint = ({ children }: PropsWithChildren<{}>) => (
    <View style={tw("flex flex-row")}>
        <Text style={{ marginHorizontal: 8 }}>•</Text>
        {children}
    </View>
);

export const PdfLink = ({
    children,
    classNames,
}: PropsWithChildren<{ classNames: string[] }>) => (
    <Text
        style={tw(
            [
                "pr-2 underline text-blue-600 font-bold text-xs",
                ...classNames,
            ].join(" ")
        )}
        src="https://github.com/jithyan"
    >
        {children}
    </Text>
);

export const HeaderPdf = ({ classNames = [] }: { classNames?: string[] }) => (
    <View style={tw(["mb-4", ...classNames].join(" "))}>
        <Text style={tw("text-6xl font-extrabold mb-4")}>Jithya N</Text>
        <Text style={tw("text-sm mb-4")}>
            Full-stack developer | Melbourne, Australia
        </Text>
        <View style={tw("flex flex-row")}>
            <PdfLink classNames={["pr-2"]}>
                https://github.com/jithyan [Github]
            </PdfLink>
            <PdfLink classNames={["pr-2"]}>
                https://www.linkedin.com/in/jithyan/ [LinkedIn]
            </PdfLink>
        </View>
        <View>
            <Text>
                This resume was generated from:
                <PdfLink classNames={["pr-2"]}>
                    https://jithyan.github.io/resume/
                </PdfLink>
            </Text>
        </View>
    </View>
);

export const AboutPdf = ({ classNames = [] }: { classNames?: string[] }) => (
    <View style={tw("flex-1 mb-2")}>
        <Text>About</Text>
        <Text>
            I've been a software developer for around {numYears} years, with the
            last {numYears - 1} of them working primarily on React SPAs at ANZ,
            IAG and NAB.
        </Text>
        <Text>
            I'm interested in any coding heavy roles in both the backend and
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
    <View style={tw("flex-1")}>
        <Text>Education</Text>
        <View style={tw(classNames.join(" "))}>
            <BulletPoint>
                <Text>
                    Master of Information Technology, Monash University
                    (2015-2017)
                </Text>
            </BulletPoint>
            <BulletPoint>
                <Text>
                    Bachelor of Software Systems, University of Melbourne
                    (2009-2013)
                </Text>
            </BulletPoint>
        </View>
    </View>
);

export const TechnicalSkillsPdf = ({
    classNames = [],
}: {
    classNames?: string[];
}) => (
    <View style={tw(["flex-1", ...classNames].join(" "))}>
        <Text>Technical Skills</Text>
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
                <Text style={tw("")}>Inexperienced in:</Text>
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

export const Pdf = () => (
    <Document>
        <Page size="A4" style={tw("flex flex-col")}>
            <HeaderPdf />
            <AboutPdf />
            <EducationPdf />
            <TechnicalSkillsPdf />
        </Page>
        <Page size="A4" style={tw("flex flex-col")}>
            <View style={tw("flex-1")}>
                <Text>Work Experience</Text>
                <View style={tw("")}>
                    <Text>National Australia Bank [Contractor]</Text>
                    <Text>Senior React Developer</Text>
                    <Text>(July 2022 - June 24, 2023)</Text>

                    <View>
                        <Text>Tech stack: React, Typescript</Text>
                    </View>

                    <BulletPoint>
                        <Text>
                            Project to integrate Outbound Call Campaign
                            management from another vendor into NAB's customized
                            Amazon Connect Softphone. This would allow NAB's
                            call centre to automatically overdial customers
                            during marketing call campaigns and connect them to
                            their agents when answered.
                        </Text>
                    </BulletPoint>
                    <BulletPoint>
                        <Text>
                            Migrated part of the codebase from Javascript to
                            Typescript, and introduced React Testing Library to
                            replace Enzyme for unit testing.
                        </Text>
                    </BulletPoint>
                    <BulletPoint>
                        <Text>
                            Introduced the finite state machine pattern for
                            managing the complexity of call interactions.
                        </Text>
                    </BulletPoint>
                </View>
            </View>

            <View style={tw("")}>
                <Text>Insurance Australia Group (IAG) [Perm]</Text>
                <Text>Specialist II, Developer</Text>
                <Text>(June 2021 - June 2022)</Text>

                <View>
                    <Text>Project: Mid-term Amendments</Text>
                    <View>
                        <Text>
                            Tech stack: Typescript, React, NodeJS, Redux,
                            Express
                        </Text>
                    </View>

                    <BulletPoint>
                        <Text>
                            Worked with Pivotal Labs to build a SPA that allowed
                            customers to amend their home and motor insurance
                            policies.
                        </Text>
                    </BulletPoint>
                    <BulletPoint>
                        <Text>
                            This was an XP team that worked strictly in pairs,
                            using TDD, continuous integration and trunk based
                            development practices.
                        </Text>
                    </BulletPoint>
                </View>
            </View>
        </Page>
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
            "underline px-1 text-blue-600 font-bold inline-block text-sm visited:text-purple-600 hover:text-blue-400 hover:shadow-sm"
        }
        document={<Pdf />}
        fileName="jithya_dev_resume.pdf"
    >
        {({ loading }) =>
            loading ? "Loading document..." : "Download resume as PDF"
        }
    </PDFDownloadLink>
);
