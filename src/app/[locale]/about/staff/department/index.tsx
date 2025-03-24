"use client";

import { Tree, TreeNode } from "react-organizational-chart";
import React from "react";
import { useTranslations } from "next-intl";

const NodeBox = ({ label, level = 1 }: { label: string; level?: number }) => {
    const colors: Record<number, string> = {
        1: "from-[#1F4E78] to-[#2C6CA4] border-[#1F4E78] text-white",
        2: "from-[#1F4E78] to-[#2C6CA4] border-[#1F4E78] text-white",
        3: "from-[#3074B5] to-[#4C91D6] border-[#3074B5] text-white",
        4: "from-[#A3C7E6] to-[#D1E5F5] border-[#A3C7E6] text-[#1F4E78]",
    };

    const colorClass = colors[level] || colors[3];

    return (
        <div className="relative flex flex-col items-center">
            <div
                className={`inline-block p-3 bg-gradient-to-br ${colorClass}
                    border rounded-xl font-medium whitespace-normal 
                    max-w-[180px] text-center shadow-md 
                    hover:shadow-lg transition-all duration-300 hover:scale-[1.03] 
                    text-xs sm:text-sm break-words capitalize`}
            >
                {label}
            </div>
        </div>
    );
};

const OrgChartTree = () => {
    const t = useTranslations("orgChart");

    return (
        <div className="w-full bg-gray-50 py-20">
            <div className="w-full overflow-x-auto">
                <div className="w-full flex justify-center">
                    <div
                        className="
                        w-fit
                        px-2
                        origin-top
                        transition-transform duration-300 ease-in-out
                        scale-[0.5] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.9] xl:scale-100
                    "
                        style={{ overflow: "hidden" }}
                    >
                        <Tree
                            label={<NodeBox label={t("chairman")} level={1} />}
                        >
                            <TreeNode
                                label={<NodeBox label={t("board")} level={2} />}
                            >
                                <TreeNode
                                    label={
                                        <NodeBox
                                            label={t("accounting")}
                                            level={3}
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("payment")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("general")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("materials_account")}
                                                level={4}
                                            />
                                        }
                                    />
                                </TreeNode>

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label={t("business")}
                                            level={3}
                                        />
                                    }
                                />

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label={t("procurement")}
                                            level={3}
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("purchasing")}
                                                level={4}
                                            />
                                        }
                                    />
                                </TreeNode>

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label={t("administration")}
                                            level={3}
                                        />
                                    }
                                />

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label={t("design")}
                                            level={3}
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("architecture")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("structure")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("me")}
                                                level={4}
                                            />
                                        }
                                    />
                                </TreeNode>

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label={t("technical")}
                                            level={3}
                                        />
                                    }
                                />

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label={t("construction")}
                                            level={3}
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("site")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("road")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("machine")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("electric")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("ground")}
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label={t("fabrication")}
                                                level={4}
                                            />
                                        }
                                    />
                                </TreeNode>
                            </TreeNode>
                        </Tree>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgChartTree;
