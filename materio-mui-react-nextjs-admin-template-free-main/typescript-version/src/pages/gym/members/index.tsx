// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TypographyTexts from 'src/views/typography/TypographyTexts'
import TypographyHeadings from 'src/views/typography/TypographyHeadings'
import UserView from 'src/views/user/UserView'
import { Card } from 'mdi-material-ui'
import { CardHeader } from '@mui/material'
import TableBasic from 'src/views/tables/TableBasic'

const MembersPage = () => {
    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader title='Basic Table' titleTypographyProps={{ variant: 'h6' }} />
                <TableBasic />
            </Card>
        </Grid>
    )
}

export default MembersPage;
