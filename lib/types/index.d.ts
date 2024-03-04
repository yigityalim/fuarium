import { ComponentPropsWithoutRef, ElementType } from "react";

export type As = ElementType;

export type MergeWithAs<Component extends As, Props extends object = {}> = Omit<
    Props,
    "as"
> & { as?: Component };

export type ComponentPropsWithAs<
    Component extends As,
    Props extends object = {},
> = Omit<
    ComponentPropsWithoutRef<Component>,
    keyof MergeWithAs<Component, Props>
> &
    MergeWithAs<Component, Props>;

export type ComponentPropsWithoutAs<
    Component extends As,
    Props extends object = {},
> = Omit<ComponentPropsWithoutRef<Component>, keyof Props> & Props;

export type ComponentProps<
    Component extends As,
    Props extends object = {},
> = Props extends { as: infer As }
    ? ComponentPropsWithAs<As, Props>
    : ComponentPropsWithoutAs<Component, Props>;