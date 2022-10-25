import Styles from './styles.module.scss'
import React, { useEffect, useState } from 'react';

import {getCompromise} from 'services/getCompromise'
import { useUser } from 'hooks/useUser';

const CompromiseInfo = () => {

  const [compromise, setCompromise] = useState({})
  const {checkToken} = useUser()

  console.log(compromise)

  return (
    <div className={Styles.CompromiseInfo}>

      <div className={Styles.title}>
        <h3>Compromiso: 2022 <span>🚧</span></h3>
      </div>

      <div className='body'>

        <div className='techs'>
          <h4>Técnicos responsables:</h4>
          <p>Tecnico 1</p>
          <p>Tecnico 2</p>
        </div>

        <div className='data'>
          <p>Fiscalias a realizar mantenimientos: <span>1000</span></p>
          <p>Equipos de Computo a realizar mantenimientos: <span>99000</span></p>
        </div>

      </div>

    </div>
  );
}

export default React.memo(CompromiseInfo);