"use client";
import { Button } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../../../../lib/store";
import { counterAction } from "@/app/lib/features/counterSlice";
export const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2">
      <Button type="button" onPress={() => dispatch(counterAction.increment())}>
        Increment
      </Button>
      <div>
        state:
        <span>{counter}</span>
      </div>
      <Button type="button" onPress={() => dispatch(counterAction.decrement())}>
        Decrement
      </Button>
    </div>
  );
};
