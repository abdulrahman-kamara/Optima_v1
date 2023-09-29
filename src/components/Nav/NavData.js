import React from 'react'

import * as FaIcons from 'react-icons/fa';

import * as AiIcons from 'react-icons/ai';

import * as IoIcons from 'react-icons/io';

export const NavData = [

    {
        title : 'Accueil',
        path :'/',
        icon: <AiIcons.AiFillHome/>,
        cName : 'nav-text'
     },
     {

        title : 'Nos activités',

        path :'/activities',

        icon: <IoIcons.IoIosPaper/>,

        cName : 'nav-text'

     },

     {

        title : 'Notre métier',

        path :'/notre-métier',

        icon: <FaIcons.FaCartPlus/>,

        cName : 'nav-text'

     },

     {

        title : 'Certificats & Agréments',

        path :'/certificat',

        icon: <IoIcons.IoMdPeople/>,

        cName : 'nav-text'

     },

     {

        title : 'Carrières',

        path :'/carrières',

        icon: <FaIcons.FaEnvelopeOpenText/>,

        cName : 'nav-text'

     },
     {

      title : 'Notre Reseau',

      path :'/reseau',

      icon: <FaIcons.FaEnvelopeOpenText/>,

      cName : 'nav-text'

   },
   {

      title : 'Boutique',

      path :'https://www.cercleoptima.fr/shop/',

      icon: <FaIcons.FaEnvelopeOpenText/>,

      cName : 'nav-text'

   },

     {

        title : 'Contact',

        path :'/contact',

        icon: <IoIcons.IoMdHelpCircle/>,

        cName : 'nav-text'

     },
     {

      title : 'Réclamation',

      path :'/réclamations',

      icon: <IoIcons.IoMdHelpCircle/>,

      cName : 'nav-text'

   }

]