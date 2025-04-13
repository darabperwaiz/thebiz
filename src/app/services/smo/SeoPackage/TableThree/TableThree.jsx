import React from "react";
import style from "./maintable.module.css";
import Link from "next/link";
import CollapseTable from "./CollapseTable/CollapseTable";
import data from "./tableData";

const TableThree = ({title}) => {
  return (
    <div className={style.tableGap}>
      <table className={style.PackageTable}>
        {/* Row 1 */}
        <tr className={style.row}>
          <td data-label="Package">{title}</td>
          <td>
            <p>
              450 <span>$/Mo</span>
            </p>
            <p>startup</p>
          </td>
          <td>
            <p>
              699 <span>$/Mo</span>
            </p>
            <p>Enterprise</p>
          </td>
          <td>
            <p>
              1200 <span>$/Mo</span>
            </p>
            <p>Blast</p>
          </td>
          <td>
            <p>
              2100 <span>$/Mo</span>
            </p>
            <p>Mega</p>
          </td>
        </tr>
        {/* Row 2 */}
        <tr className={style.row}>
          <td data-label="Package">Keywords Plan</td>
          <td data-label="startup">
            <span>Upto 30</span>
          </td>
          <td data-label="Enterprise">
            <span>Upto 50</span>
          </td>
          <td data-label="Blast">
            <span>Upto 100</span>
          </td>
          <td data-label="Mega">
            <span>Upto 200</span>
          </td>
        </tr>

        <tr className={style.row}>
          <td data-label="Package">Focus Keywords</td>
          <td data-label="startup">
            <span>15</span>
          </td>
          <td data-label="Enterprise">
            <span>25</span>
          </td>
          <td data-label="Blast">
            <span>50</span>
          </td>
          <td data-label="Mega">
            <span>100</span>
          </td>
        </tr>

        <tr className={style.row}>
          <td data-label="Package">Other Relevant Keywords</td>
          <td data-label="startup">
            <span>15</span>
          </td>
          <td data-label="Enterprise">
            <span>25</span>
          </td>
          <td data-label="Blast">
            <span>50</span>
          </td>
          <td data-label="Mega">
            <span>100</span>
          </td>
        </tr>

        {/* Row 3 */}
        <tr className={style.row}>
          <td data-label="Package">Keywords Top 10 Guarantee(%)*</td>
          <td  data-label="startup">
            <span>25%</span>
          </td>
          <td data-label="Enterprise">
            <span>30%</span>
          </td>
          <td data-label="Blast">
            <span>35%</span>
          </td>
          <td data-label="Mega">
            <span>45%</span>
          </td>
        </tr>
        {/* Row 4 */}
        <tr className={style.row}>
          <td></td>
          <td data-label="Startup">
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
          <td data-label="Enterprise">
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
          <td data-label="Blast">
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
          <td data-label="Mega">
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
        </tr>
      </table>
      {data.map((tabledata, index)=> (
        <CollapseTable key={index} data={tabledata}/>
      ))}
    </div>
  );
};

export default TableThree;
