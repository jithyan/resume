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

export const Pdf = () => (
    <Document>
        <Page size="A4" style={tw("flex flex-col")}>
            <View style={tw("mb-4")}>
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
            <View style={tw("flex-1 mb-2")}>
                <Text>About</Text>
                <Text>
                    I've been a software developer for around {numYears} years,
                    with the last {numYears - 1} of them working primarily on
                    React SPAs at ANZ, IAG and NAB.
                </Text>
                <Text>
                    I'm interested in any coding heavy roles in both the backend
                    and frontend, that require deep knowledge of React or
                    Typescript. I'm also keen on any roles involving Rust, as
                    I'm learning that in my spare time.
                </Text>
            </View>
            <View style={tw("flex-1")}>
                <Text>Education</Text>
                <View style={tw("")}>
                    <BulletPoint>
                        <Text>
                            Master of Information Technology, Monash University
                            (2015-2017)
                        </Text>
                    </BulletPoint>
                    <BulletPoint>
                        <Text>
                            Bachelor of Software Systems, University of
                            Melbourne (2009-2013)
                        </Text>
                    </BulletPoint>
                </View>
            </View>
            <View style={tw("flex-1")}>
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
