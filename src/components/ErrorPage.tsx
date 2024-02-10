import Typography from "@mui/material/Typography";

interface ErrorPageProp {
    message: string;
}
const ErrorPage: React.FC<ErrorPageProp> = props => {
    return (
        <Typography variant="h2"> {props.message}</Typography>
    );
};

export default ErrorPage