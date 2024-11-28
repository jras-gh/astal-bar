import Battery from "gi://AstalBattery"
import { bind } from "astal"

export default function BatteryPercentage() {
  const bat = Battery.get_default()

  return <box>
    <button onClick="echo hello" />
    <label label="hi" />
    <label label={bind(bat, "percentage").as((p) => p * 100 + "%")} />
  </box>
}
