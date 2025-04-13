'use client'
import React from "react";
import style from "./maintable.module.css";
import Link from "next/link";
import CollapseTable from "./CollapseTable/CollapseTable";
import data from "./tableData";

const TableOne = ({title}) => {
  return (
    <div className={style.tableGap}>
      <table className={style.PackageTable}>
        {/* Row 1 */}
        <tbody>
        <tr className={style.row}>
          <td data-label="Package">{title}</td>
          <td>
            <p>
              250 <span>$/Mo</span>
            </p>
            <p>Startup</p>
          </td>
          <td>
            <p>
              350 <span>$/Mo</span>
            </p>
            <p>Growth</p>
          </td>
          <td>
            <p>
              550 <span>$/Mo</span>
            </p>
            <p>Premium</p>
          </td>        
        </tr>
        {/* Row 2 */}
        <tr className={style.row}>
          <td data-label="Package">Channel</td>
          <td data-label="Startup">
            <span>Any 2 Channel Optimization</span>
          </td>
          <td data-label="Growth">
            <span>Any 3 Channel Optimization</span>
          </td>
          <td data-label="Premium">
            <span>Any 4 Channel Optimization</span>
          </td>
        </tr>
        {/* Row 3 */}

        {/* Row 4 */}
        <tr className={style.row}>
          <td></td>
          <td data-label="Startup">
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
          <td data-label="Growth">
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
          <td data-label="Premium">
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
        </tr>
        </tbody>
      </table>
      {data.map((tabledata, index)=> (
        <CollapseTable key={index} data={tabledata}/>
      ))}
      
      {/* <CollapseTable />
      <CollapseTable /> */}
    </div>
  );
};

export default TableOne;
