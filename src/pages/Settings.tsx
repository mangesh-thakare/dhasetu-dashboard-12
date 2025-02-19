
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="grid gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Amit Kumar" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="amit@example.com" />
              </div>
              <Button>Update Profile</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-500">
                    Receive email updates about your account activity
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Transaction Alerts</Label>
                  <p className="text-sm text-gray-500">
                    Get notified about significant transactions
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Security Alerts</Label>
                  <p className="text-sm text-gray-500">
                    Receive alerts about security-related activities
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>Change Password</Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
