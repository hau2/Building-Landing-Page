"use client";

import { Tree, TreeNode } from "react-organizational-chart";
import React from "react";

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
                            label={
                                <NodeBox
                                    label="Chủ tịch hội đồng thành viên"
                                    level={1}
                                />
                            }
                        >
                            <TreeNode
                                label={
                                    <NodeBox label="Ban giám đốc" level={2} />
                                }
                            >
                                <TreeNode
                                    label={
                                        <NodeBox
                                            label="Phòng kế toán"
                                            level={3}
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Kế toán thanh toán"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Kế toán tổng hợp"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Kế toán vật tư"
                                                level={4}
                                            />
                                        }
                                    />
                                </TreeNode>

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label="Phòng kinh doanh"
                                            level={3}
                                        />
                                    }
                                />

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label="Phòng cung ứng vật tư"
                                            level={3}
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Thu mua vật tư"
                                                level={4}
                                            />
                                        }
                                    />
                                </TreeNode>

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label="Phòng hành chính"
                                            level={3}
                                        />
                                    }
                                />

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label="Phòng thiết kế"
                                            level={3}
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Kiến trúc"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Kết cấu"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox label="M&E" level={4} />
                                        }
                                    />
                                </TreeNode>

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label="Phòng kỹ thuật"
                                            level={3}
                                        />
                                    }
                                />

                                <TreeNode
                                    label={
                                        <NodeBox
                                            label="Đội thi công"
                                            level={3}
                                        />
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Đội công trình"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Đội cấu đường"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Đội cơ giới"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Đội điện, nước, điện lạnh"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Đội san lấp, cải tạo"
                                                level={4}
                                            />
                                        }
                                    />
                                    <TreeNode
                                        label={
                                            <NodeBox
                                                label="Đội gia công lắp đặt cơ khí"
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
