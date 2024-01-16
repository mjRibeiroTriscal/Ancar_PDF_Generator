/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 12/01/2023 - 15:44:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/01/2023
    * - Author          : mario
    * - Modification    : 
**/

import app from './app'
import 'dotenv/config'

const PORT = process.env.PORT || process.env.LOCAL_PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
