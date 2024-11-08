import React from "react";
import style from "./maintable.module.css";
import Link from "next/link";
import CollapseTable from "../CollapseTable/CollapseTable";

const MainTable = ({title}) => {
  return (
    <>
      <table className={style.PackageTable}>
        {/* Row 1 */}
        <tr className={style.row}>
          <td>{title}</td>
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
          <td>Keyword Plan</td>
          <td>
            <span>Upto 25</span>
          </td>
          <td>
            <span>Upto 25</span>
          </td>
          <td>
            <span>Upto 25</span>
          </td>
          <td>
            <span>Upto 25</span>
          </td>
        </tr>
        {/* Row 3 */}
        <tr className={style.row}>
          <td>Keywords Top 10 Guarantee(%)*</td>
          <td>
            <span>25</span>
          </td>
          <td>
            <span>25</span>
          </td>
          <td>
            <span>25</span>
          </td>
          <td>
            <span>25</span>
          </td>
        </tr>
        {/* Row 4 */}
        <tr className={style.row}>
          <td></td>
          <td>
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
          <td>
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
          <td>
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
          <td>
            <Link href="/" className={style.LinkBtn}>
              Get Started
            </Link>
          </td>
        </tr>
      </table>
      <CollapseTable />
      <CollapseTable />
      <CollapseTable />
    </>
  );
};

export default MainTable;
