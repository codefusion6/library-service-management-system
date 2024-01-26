import React from "react";
import { FaSearch, FaUserFriends } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaBookOpen, FaBookBible } from "react-icons/fa6";
import Chart from "@/components/dashboardChart/Chart";

function Dashboard({ children }) {
  return (
    <main className="h-[100vh] relative overflow-y-scroll top-0 p-3 md:p-5 lg:p-8">
      <div className="">
        <div className="flex justify-end items-center gap-3 bg-gradient-to-r from-yellow-200 to-green-600 p-5">
          <input
            type="text"
            placeholder="search a book"
            className="rounded-lg py-2 px-3"
          />
          <FaSearch className="text-2xl"></FaSearch>
          <IoIosNotifications className="text-3xl" />
        </div>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Card className="max-w-[400px] border bg-green-900 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold">Total User</p>
                <p className="text-xl font-semibold flex gap-3 ">
                  <FaUserFriends className="text-3xl" />
                  105
                </p>
              </div>
            </CardHeader>

            <CardBody>
              <p>
                This number is static now in next milestone we will show the
                number from Database.
              </p>
            </CardBody>
          </Card>
          <Card className="max-w-[400px] border bg-green-700 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold flex"> Total Books</p>
                <p className="text-xl font-semibold flex gap-3 ">
                  <FaBookOpen className="text-3xl" />
                  105
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                This number is static now in next milestone we will show the
                number from Database.
              </p>
            </CardBody>
          </Card>
          <Card className="max-w-[400px] border bg-green-500 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold">Total Featured book</p>
                <p className="text-xl font-semibold flex gap-3  ">
                  <FaBookBible className="text-3xl" />
                  105
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                This number is static now in next milestone we will show the
                number from Database.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="w-96 mx-auto mt-5">
          <Chart></Chart>
        </div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eligendi magnam natus. Reprehenderit asperiores porro suscipit repellat accusantium ipsum ea sit, temporibus expedita, earum, blanditiis quasi facilis sunt quas quisquam iusto dolorem amet qui. In quasi ducimus quam similique voluptate perspiciatis itaque recusandae alias quae nemo, suscipit eos molestias. Libero vero reprehenderit obcaecati nobis laborum totam quae exercitationem ad! Eligendi similique voluptatem harum, alias ipsum recusandae mollitia exercitationem autem itaque aut magnam molestias rem porro non nam sapiente quisquam inventore perspiciatis fuga ad ex esse distinctio. Fugiat beatae eum odio ad voluptates culpa dignissimos corrupti pariatur quia minus cumque, necessitatibus quidem! Dolorum reprehenderit dignissimos repellendus corrupti accusantium facilis quaerat vel illum omnis repellat. Fugit aliquam neque maiores, voluptate non exercitationem molestiae. Magnam inventore consectetur distinctio placeat. Ad quaerat maxime aliquid, culpa fuga et dolorem, optio vel perferendis at laboriosam non voluptatum deleniti inventore? Dicta aliquam quibusdam, assumenda architecto fuga numquam necessitatibus nulla quasi qui accusantium quos nobis, facere molestias ab nesciunt asperiores ea ratione tempora obcaecati debitis maxime, explicabo soluta. Sed deleniti saepe dicta in asperiores voluptatum quas natus omnis dignissimos dolorem recusandae consequatur suscipit voluptatem voluptates, quo est adipisci porro voluptatibus quia totam aut pariatur tempore accusantium? Voluptatem quisquam optio quidem nulla officiis error eos quos dolorem consequuntur ipsa. Voluptatibus dolor libero, temporibus excepturi perferendis asperiores accusantium nam quisquam. Optio molestiae autem suscipit cumque vero culpa consequatur est voluptas, rerum possimus nemo magnam quisquam at dolorum praesentium velit quas nulla voluptatum tempora doloribus unde laboriosam sunt! Nulla ut facilis sunt doloribus cum fugiat illum in vel nesciunt ex ea labore itaque sint, exercitationem ipsam debitis iste vitae soluta fuga ab repudiandae! Vitae at ipsa quia, repellat rerum, illum voluptas ullam harum corporis repellendus excepturi, officiis dolorum rem laborum maiores ut? Est quidem explicabo quibusdam illo hic temporibus, facere harum dolore nisi rem fuga nostrum itaque reiciendis ipsa exercitationem! Dolore sit culpa ut soluta quas, porro excepturi pariatur saepe nisi non iusto in sed ex velit delectus est debitis sapiente voluptas. Voluptas blanditiis aliquam ipsum, explicabo laborum dolores magnam quos veniam qui, dolorum praesentium quam consequuntur saepe esse quas! Assumenda sint dolorem, dolor consequuntur cum nulla accusamus ipsam pariatur tenetur natus eaque provident fuga fugiat iusto ad? Recusandae, cumque quod sapiente doloribus ad autem porro beatae perspiciatis impedit est repellat labore fugit earum ratione quam ducimus numquam exercitationem laborum iste reiciendis. Amet doloremque asperiores ratione esse eum quas. Ab, facilis?
      </div>
    </main>
  );
}

export default Dashboard;
