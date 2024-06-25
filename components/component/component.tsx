/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/822Q76j5Jxp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <CodeIcon className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">송수민</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link className="hover:underline" href="#">
              메인
            </Link>
            <Link className="hover:underline" href="#projects">
              프로젝트
            </Link>
            <Link className="hover:underline" href="#skills">
              기술
            </Link>
            <Link className="hover:underline" href="#contact">
              문의하기
            </Link>
          </nav>
        </div>
      </header>
      <section className="bg-gray-900 text-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className=" space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">송수민</h1>
            <p className="text-lg md:text-xl text-center">
              C#과 C를 주로 공부한 개발자 지망생 송수민입니다.
            </p>
            <div className="flex space-x-4 justify-center">
              <Link href="#projects">
                <Button variant="default">프로젝트 보기</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline">문의하기</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-16 md:py-24" id="projects">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">프로젝트</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://github.com/sum-in2/2024_1" target="_blank" rel="noopener noreferrer">
              <Card className="mb-8">
                <img
                  alt="Project 1"
                  className="rounded-t-lg"
                  height={300}
                  src="/Project1_Artesia.png"
                  style={{ width: '100%' }}
                />
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-2">Artesia</CardTitle>
                  <CardDescription className="text-gray-600">
                    24년 상반기에 개발자로 참여한 게임입니다.
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
            <a href="https://github.com/sum-in2/2021_02_project_feather" target="_blank" rel="noopener noreferrer">
              <Card className="mb-8">
                <img
                  alt="Project 2"
                  className="rounded-t-lg"
                  height={300}
                  src="/Project2_Feather.png"
                  style={{ width: '100%' }}
                />
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-2">Feather</CardTitle>
                  <CardDescription className="text-gray-600">
                    21년 하반기에 개발자로 참여한 프로젝트입니다.
                  </CardDescription>
                </CardContent>
              </Card>
            </a>

            <a href="https://github.com/sum-in2" target="_blank" rel="noopener noreferrer">
              <Card className="mb-8">
                <img
                  alt="Project 3"
                  className="rounded-t-lg"
                  height={300}
                  src="/Project3_GithubLogo.png"
                  style={{ width: '100%' }}
                />
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-2">깃허브</CardTitle>
                  <CardDescription className="text-gray-600">
                    위 프로젝트 이외의 활동들을 깃허브에서 확인해보실 수 있습니다.
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white py-12 md:py-24" id="skills">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">기술</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">언어</h3>
              <ul className="space-y-2">
                <li>C#</li>
                <li>C++</li>
                <li>C</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">게임 엔진</h3>
              <ul className="space-y-2">
                <li>Unity</li>
                <li>Unreal Engine</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">개발 도구</h3>
              <ul className="space-y-2">
                <li>Visual Studio Code</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24"
        id="contact"
      >
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">문의</h2>
          <form className="max-w-md mx-auto" >
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                htmlFor="name"
              >
                이름
              </label>
              <Input id="name" placeholder="이름을 입력해주세요" type="text" />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                htmlFor="email"
              >
                이메일
              </label>
              <Input id="email" placeholder="이메일을 입력해주세요" type="email" />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                htmlFor="message"
              >
                문의
              </label>
              <Textarea
                id="message"
                placeholder="문의 내용을 입력해주세요"
                rows={5}
              />
            </div>
            <Button className="w-full cursor-x" type="button" variant="outline">
              메시지 보내기
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <CodeIcon className="h-6 w-6 mr-2" />
            <span className="text-lg font-bold">송수민</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
