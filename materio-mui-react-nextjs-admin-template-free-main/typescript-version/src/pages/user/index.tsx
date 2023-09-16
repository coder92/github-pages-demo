// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TypographyTexts from 'src/views/typography/TypographyTexts'
import TypographyHeadings from 'src/views/typography/TypographyHeadings'
import UserView from 'src/views/user/UserView'

const UserPage = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <UserView />
            </Grid>
            <Grid item xs={12}>
                <UserView />
            </Grid>
        </Grid>
    )
}

export default UserPage;
