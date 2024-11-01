import React from 'react'
import style from './outcome.module.css'
import OutCard from "../OutCard/OutCard"


const Outcome = () => {
  return (
    <div className={style.outcome}>
        <p><span>Outcome</span> Results<br />Estimate</p>
      <div className={style.bottom}>
        <OutCard title={'Integrity'} description={'Website will be ranked on Google 1st page, 80% of total keywords would rank within 6  months.'} />
        <OutCard title={'Duration'} description={'Website will be ranked on Google 1st page, 80% of total keywords would rank within 6  months.'} />
        <OutCard title={'Rank'} description={'Website will be ranked on Google 1st page, 80% of total keywords would rank within 6  months.'} />
        <OutCard title={'Competition'} description={'Website will be ranked on Google 1st page, 80% of total keywords would rank within 6  months.'} />
        <OutCard title={'Results'} description={'Website will be ranked on Google 1st page, 80% of total keywords would rank within 6  months.'} />
        <OutCard title={'Report'} description={'Website will be ranked on Google 1st page, 80% of total keywords would rank within 6  months.'} />
        <OutCard title={'Report'} description={'Website will be ranked on Google 1st page, 80% of total keywords would rank within 6  months.'} />
        <OutCard title={'Report'} description={'Website will be ranked on Google 1st page, 80% of total keywords would rank within 6  months.'} />
      </div>
    </div>
  )
}

export default Outcome
