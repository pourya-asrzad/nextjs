"use client";
import { Button } from "@heroui/react";
import { counterAction } from "@/app/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
export const Counter = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
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
