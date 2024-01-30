"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from "@nextui-org/react";


const UserPage = () => {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Avatar</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>
            <Image style={{ opacity: "100" }} src="https://i.ibb.co/Fbc90wF/woman-949666.png" alt="img1" className="rounded-full w-12 h-8 size-10 opacity-100" height={100} width={100} ></Image>
          </TableCell>
          <TableCell>Arina Huque Rafa</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>
            <Image style={{ opacity: "100" }} src="https://i.ibb.co/yP0bv4y/Whats-Appir.jpg" alt="img2" className="rounded-full w-12 h-8 size-10 opacity-100" height={100} width={100}  ></Image>
          </TableCell>
          <TableCell>Priyanka Das Dipa</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>
            <Image style={{ opacity: "100" }} src="https://i.ibb.co/PxCg9PK/man-11696179.png" alt="img3" className="rounded-full w-12 h-8 size-10 opacity-100" height={100} width={100} ></Image>
          </TableCell>
          <TableCell>Sabbir Ahmed </TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>
            <Image style={{ opacity: "100" }} src="https://i.ibb.co/MDyKKgQ/804953.png" alt="img4" className="rounded-full w-12 h-8 size-10 opacity-100" height={100} width={100}  ></Image>
          </TableCell>
          <TableCell>Probesh Nath </TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default UserPage;
