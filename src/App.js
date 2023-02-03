
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Home = () => {
  return (
    <>
      <h1 className="header">WELCOME TO QUICKPAY</h1>
      <h3>Bank of the free</h3>
      <p>
        The dashboard page holds all your information... Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed varius mauris ex, in aliquam mi
        fermentum ut. Phasellus augue tortor, posuere in aliquam at, facilisis
        sed neque. Donec in leo ac magna posuere euismod a vel massa.
        Pellentesque ut arcu dignissim, interdum augue in, accumsan lectus.
        Integer eu venenatis neque. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Ut cursus non
        leo eget dictum. Proin sem ipsum, bibendum vel eleifend id, iaculis id
        sem. Maecenas mauris tortor, sollicitudin eu urna sed, condimentum
        rutrum turpis. Aenean vulputate nisl nibh, vel molestie eros cursus
        porttitor. Morbi commodo aliquam dui, ut tristique nisl pharetra sit
        amet. Curabitur ac lacus bibendum, ornare elit ac, imperdiet urna.
        Phasellus sem augue, auctor quis mi a, malesuada bibendum odio. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris tincidunt tortor enim, non posuere sapien
        eleifend vel.
      </p>
    </>
  );
};
const Dashboard = () => {
  return (
    <>
      <h1 className="header"> DASHBOARD PAGE</h1>
      <h3>Welcome User</h3>
      <p>
        Suspendisse lobortis risus nisi, sit amet placerat ipsum tempus quis.
        Mauris dapibus, tortor nec semper laoreet, erat odio tristique nibh, a
        convallis magna justo non nulla. Ut vitae tristique mi. Nullam at ex
        ante. Vivamus congue nisi ex, a tincidunt dolor mattis vitae. Donec
        laoreet leo augue, et dapibus magna condimentum in. Duis cursus nec
        lorem placerat euismod. Duis vitae ante non diam vestibulum volutpat.
        Pellentesque vel nunc quis odio mattis laoreet. Etiam euismod velit sed
        dapibus elementum.Aenean vulputate nisl nibh, vel molestie eros cursus
        porttitor. Morbi commodo aliquam dui, ut tristique nisl pharetra sit
        amet. Curabitur ac lacus bibendum, ornare elit ac, imperdiet urna.
        Phasellus sem augue, auctor quis mi a, malesuada bibendum odio. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris tincidunt tortor enim, non posuere sapien
        eleifend vel.
      </p>
    </>
  );
};
const Transactions = () => {
  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
      <p>
        Nullam ultrices nisi ac ipsum gravida, in ullamcorper leo sodales. In
        hac habitasse platea dictumst. Morbi ut pulvinar lectus. Praesent vel
        leo tortor. In viverra libero ligula, eu interdum nibh condimentum et.
        Praesent eu commodo dolor. Sed scelerisque dui tortor, non auctor est
        maximus vel. In ullamcorper tellus at sapien iaculis, eget consequat sem
        luctus. Praesent maximus elit eu dictum fringilla. Suspendisse nec
        congue turpis.Aliquam at mattis arcu, non sagittis risus. Nunc tristique
        pretium nibh, eu sagittis metus. Ut tristique ullamcorper ultrices.
        Integer tincidunt purus nec feugiat venenatis. Donec quam urna,
        ultricies non justo et, maximus egestas metus. Donec dapibus ante ac
        justo accumsan, ac vestibulum nulla sollicitudin. Duis mauris libero,
        ultricies non sem ac, auctor tempus justo. Donec hendrerit tempor
        sagittis.
      </p>
    </>
  );
};

const App = () => {
  const { collapseSidebar,rtl } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app"  >
        <Menu>
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={<MenuRoundedIcon onClick={() => {
              collapseSidebar();
            }} />}
            
          >
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="dashboard" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            Dashboard
          </MenuItem>
          <MenuItem 
          icon={<ReceiptRoundedIcon />}
          >
             Invoices </MenuItem>
             
          <SubMenu label="Charts" 
          icon={<BarChartRoundedIcon />}
          >
            <MenuItem 
            icon={<TimelineRoundedIcon />}
            > Timeline Chart </MenuItem>
            <MenuItem 
            icon={<BubbleChartRoundedIcon />}
            >Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" 
          icon={<WalletRoundedIcon />}
          >
            <MenuItem 
            icon={<AccountBalanceRoundedIcon />}
            >
              Current Wallet
            </MenuItem>
            <MenuItem 
            icon={<SavingsRoundedIcon />}
            >Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="transactions" className="link" />}
            icon={<MonetizationOnRoundedIcon />}
          >
            Transactions
          </MenuItem>
          <SubMenu label="Settings"
           icon={<SettingsApplicationsRoundedIcon />}
           >
            <MenuItem 
            icon={<AccountCircleRoundedIcon />}
            > Account </MenuItem>
            <MenuItem 
            icon={<ShieldRoundedIcon />}
            >
               Privacy </MenuItem>
            <MenuItem 
            icon={<NotificationsRoundedIcon />}
            >
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem 
          icon={<LogoutRoundedIcon />}
          > Logout </MenuItem>
        </Menu>
      </Sidebar>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </section>
    </div>

  );
          }

export default App;
