import { Card, CardContent, Typography } from '@mui/material';
import KaptureLogo from './KaptureLogo';
import LoginForm from './LoginForm';
const Login = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <KaptureLogo />
            <div className='w-full h-full flex justify-center items-center'>
                <Card sx={{ maxWidth: 350 }}>
                    <p className='flex justify-center items-center '>LOGIN TO YOUR ACCOUNT</p>
                    <CardContent>
                        <LoginForm />
                        <div className='justify-center items-center'>
                            <div>
                                <Typography gutterBottom variant="h7" component="button">
                                    Forget Password?
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2" color="text.secondary">
                                    No worries, click on forget password button to reset.
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default Login;