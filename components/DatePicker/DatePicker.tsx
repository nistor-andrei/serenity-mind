import { Button } from "*/components/ui/button";
import { Calendar } from "*/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "*/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

export function DatePicker() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="shadow-none">
          {date ? format(date, "PPP") : "Pick a date"}
          <CalendarIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
