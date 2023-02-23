import { AntdLayout, Button } from "@pankod/refine-antd";
import { useAuth0 } from "@auth0/auth0-react";

export const Login: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <AntdLayout
            // style={{
            //     background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
            //     backgroundSize: "cover",
            // }}
        >
            
               <div style={{ marginBottom: "28px" }}>
                        <img src="./Signin.png" alt="Refine" />
                    </div>
            <div style={{ height: "100vh", display: "flex" }}>
                <div style={{ maxWidth: "200px", margin: "auto" }}>
                <link href="./MainPage.html"/>
                    <Button
                        type="primary"
                        size="large"
                        block
                        onClick={() => loginWithRedirect()}
                    >
                        Sign in
                    </Button>
                </div>
            </div>
        </AntdLayout>
    );
};

