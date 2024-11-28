import { CoursesSlider } from "../components/CoursesSlider";
import { Header } from "../components/Header";
import { useState } from "react";
import { Frame } from "../components/Frame";
import { SimpleJsIcon } from "../icons/SimpleJsIcon";
import { MainFrame } from "../components/MainFrame";
import { CourseProgram } from "../components/CourseProgram";
import { CourseProgramExample } from "../components/CourseProgramExample";

export function HomePage() {
  return (
    <div className="w-full">
      <Header />
      <main className="mt-5 w-full flex justify-center">
        <div className="w-[max(80vw,400px)] flex flex-col">
          <h1 className="ml-arrow text-adptxl font-medium my-5">Наши курсы:</h1>
          <CoursesSlider />
          <h2 className="text-adptxl font-medium ml-arrow mb-10 mt-5">
            Как здесь учиться?
          </h2>
          <MainFrame
            title="1. Выберите курс"
            description={`Наши курсы подойдут как начинающим, так и тем, кто уже умеет
                писать простые сайты. Вы можете проходить состоящую из всех
                курсов на сайте программу последовательно, либо же только
                интересующие вас курсы. Для сохранения прогресса пройдите
                авторизацию. Описание всех технологий, которые вы можете
                изучить, можно найти в разделе Курсы.`}
            content={<CourseProgramExample />}
          />
          <MainFrame
            className="my-10"
            title="2. Проходите уроки"
            description={`В каждом курсе уроки доступны для прохождения строго по порядку. В
              каждом уроке кратко изложена вся необходимая информация, которая
              позволит вам выполнить прикрепленное к уроку задание, после чего
              для прохождения откроется следующий урок. В случае, если что-то
              непонятно, прочитайте статью еще раз. Если вы считаете, что
              информация донесена некорректно, вы можете написать в телеграм:
              @wTh8ee.`}
          />
        </div>
      </main>
    </div>
  );
}
