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
              600 <span>$/3 Mo</span>
            </p>
            <p>Startup</p>
          </td>
          <td>
            <p>
              1050 <span>$/6 Mo</span>
            </p>
            <p>Growth</p>
          </td>
          <td>
            <p>
              1350 <span>$/9 Mo</span>
            </p>
            <p>Premium</p>
          </td>
          <td>
            <p>
              1500 <span>$/1 Y</span>
            </p>
            <p>High Value</p>
          </td>        
        </tr>
        {/* Row 2 */}
        
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
          <td data-label="High Value">
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
