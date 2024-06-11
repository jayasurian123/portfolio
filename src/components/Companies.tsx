import { Icon } from "@iconify/react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Companies = () => {
  return (
    <div id="experience" className="scroll-mt-14">
      <h4 className="mt-8 text-4xl">What I did earlier.</h4>
      <p className="my-3">
        Since last 18 years I have been working with different companies and
        people. Everyone helped me to become whom I am now.
      </p>
      <p>
        Still these are the{" "}
        <span className="text-blue-300">special companies</span> which I have a
        special place in my heart 💕
      </p>
      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>Nextuple</p>
              <div>
                <Image
                  src={"/nextuple_logo.png"}
                  width={100}
                  height={40}
                  alt="nextuple company logo"
                />
              </div>
            </CardTitle>
            <CardDescription>
              Frontend Lead as Freelancer (2019 - 2023)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              - Architectred many frontend projects & built & trained a good
              team
            </p>
            <p>- Joined as a first frontend focused developer</p>
            <div className="mt-4 flex gap-3">
              <Badge>React</Badge>
              <Badge>React native</Badge>
              <Badge>PWA</Badge>
              <Badge>Javascript</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Icon icon="ep:location" className="text-2xl" />
            <p>(remote) - Boston, USA </p>
          </CardFooter>
        </Card>
      </div>

      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>Babbel</p>
              <div>
                <Image
                  src={"/babbel.svg"}
                  width={100}
                  height={40}
                  alt="Babbel company logo"
                />
              </div>
            </CardTitle>
            <CardDescription>
              Sr. engineer & frontend lead (2012 - 2018)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>- Part of team creating babbel trainers</p>
            <p>
              - Joined in the startup & seen growing it around 300+ employees
            </p>
            <div className="mt-4 flex gap-3">
              <Badge>Javascript</Badge>
              <Badge>RoR</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Icon icon="ep:location" className="text-2xl" />
            <p>Berlin, Germany </p>
          </CardFooter>
        </Card>
      </div>

      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>Yahoo!</p>
              <div>
                <Image
                  src={"/yahoo.png"}
                  width={100}
                  height={40}
                  alt="yahoo company logo"
                />
              </div>
            </CardTitle>
            <CardDescription>
              Sr. engineer & tech lead (2006 - 2012)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              - Part of Yahoo! mail engineer rewriting the whole mail frontend
            </p>
            <p>
              - Part of tech evengelist group. Given many talks in the campus
              and open platforms
            </p>

            <p>
              - Worked in different roles starting from engineer to tech lead
            </p>
            <p>- Joined directly from the NIT campus</p>
            <div className="mt-4 flex gap-3">
              <Badge>Javascript</Badge>
              <Badge>php</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Icon icon="ep:location" className="text-2xl" />
            <p>Bangalore, India </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Companies;
