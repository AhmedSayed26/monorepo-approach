import React from "react";
import { render as rtlRender, type RenderOptions } from "@testing-library/react";
import { TestingProvider, type TestingProviderProps } from "./TestingProvider";

export type CustomRenderOptions = Omit<RenderOptions, "wrapper"> & {
	providers?: TestingProviderProps["providers"];
};

function Wrapper({ children, providers }: { children: React.ReactNode; providers?: TestingProviderProps["providers"]; }) {
	return <TestingProvider providers={providers}>{children}</TestingProvider>;
}

export function render(ui: React.ReactElement, options: CustomRenderOptions = {}) {
	const { providers, ...rtlOptions } = options;
	return rtlRender(ui, { wrapper: ({ children }) => <Wrapper providers={providers}>{children}</Wrapper>, ...rtlOptions });
}

export * from "@testing-library/react";
