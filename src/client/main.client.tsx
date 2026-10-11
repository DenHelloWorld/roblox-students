import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";

function HelloRoblox() {
	return (
		<screengui ResetOnSpawn={false}>
			<textlabel
				Text="Связь с React установлена!"
				Size={new UDim2(0, 300, 0, 50)}
				Position={new UDim2(0.5, -150, 0.1, 0)}
				BackgroundColor3={Color3.fromRGB(46, 204, 113)}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Font={Enum.Font.GothamBold}
				TextSize={18}
			/>
		</screengui>
	);
}

const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;
const root = ReactRoblox.createRoot(playerGui);
root.render(<HelloRoblox />);
