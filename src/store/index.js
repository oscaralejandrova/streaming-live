import { configureStore } from '@reduxjs/toolkit'
import user from './states/user.slice'
 

export default configureStore({

  reducer:{

    user

  }

})