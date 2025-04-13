import React from "react";
import style from "./maintable.module.css";
import Link from "next/link";
import CollapseTable from "./CollapseTable/CollapseTable";

const TableTwo = ({title}) => {
  return (
    <div className={style.tableGap}>
      <table className={style.PackageTable}>
        {/* Row 1 */}
        <tbody>
        <tr className={style.row}>
          <td data-label="Package">{title}</td>
          <td>
            <p>
              225 <span>$/Mo</span>
            </p>
            <p>Startup</p>
          </td>
          <td>
            <p>
              225 <span>$/Mo</span>
            </p>
            <p>Growth</p>
          </td>
          <td>
            <p>
              225 <span>$/Mo</span>
            </p>
            <p>Premium</p>
          </td>
          <td>
            <p>
              225 <span>$/Mo</span>
            </p>
            <p>High Value</p>
          </td>
        </tr>
        {/* Row 2 */}
        <tr className={style.row}>
          <td data-label="Package">Keyword Plan</td>
          <td data-label="Startup">
            <span>Upto 25</span>
          </td>
          <td data-label="Growth">
            <span>Upto 25</span>
          </td>
          <td data-label="Premium">
            <span>Upto 25</span>
          </td>
          <td data-label="High Value">
            <span>Upto 25</span>
          </td>
        </tr>
        {/* Row 3 */}
        <tr className={style.row}>
          <td data-label="Package">Keywords Top 10 Guarantee(%)*</td>
          <td  data-label="Startup">
            <span>25</span>
          </td>
          <td data-label="Growth">
            <span>25</span>
          </td>
          <td data-label="Premium">
            <span>25</span>
          </td>
          <td data-label="High Value">
            <span>25</span>
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
      {/* <CollapseTable />
      <CollapseTable />
      <CollapseTable /> */}
    </div>
  );
};

export default TableTwo;
